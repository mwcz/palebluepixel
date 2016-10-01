
/*
Three.js "tutorials by example"
Author: Lee Stemkoski
Date: July 2013 (three.js v59dev)
*/

// MAIN

// standard global variables
var container, scene, camera, renderer, controls, stats, earthGood, earthBad;
var clock = new THREE.Clock();
// custom global variables

init();
animate();

function init() 
{
    // SCENE
    scene = new THREE.Scene();
    // CAMERA
    var SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;
    var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 20000;
    camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
    scene.add(camera);
    camera.position.set(0,100,400);
    // RENDERER
    if ( Detector.webgl )
        renderer = new THREE.WebGLRenderer( {antialias:true} );
    else
        renderer = new THREE.CanvasRenderer(); 
    renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
    container = document.getElementById( 'ThreeJS' );
    container.appendChild( renderer.domElement );
    // CONTROLS
    controls = new THREE.OrbitControls( camera, renderer.domElement );
    controls.addEventListener( 'change', render );
    // SKYBOX/FOG
    var skyboxImage = "skybox.jpg";
    var skyGeometry = new THREE.CubeGeometry( 5000, 5000, 5000 );

    var materialArray = [];
    for (var i = 0; i < 6; i++)
        materialArray.push( new THREE.MeshBasicMaterial({
            map: new THREE.TextureLoader().load(skyboxImage),
            side: THREE.BackSide
        }));
    var skyMaterial = new THREE.MeshFaceMaterial( materialArray );
    var skyBox = new THREE.Mesh( skyGeometry, skyMaterial );
    scene.add( skyBox );

    // SPHERE
    var sphereGeom = new THREE.SphereGeometry(50, 32, 32);

    // create custom material from the shader code above
    //   that is within specially labeled script tags
    var customMaterial = new THREE.ShaderMaterial( {
        uniforms: 
        { 
            "c":   { type: "f", value: 1.0 },
            "p":   { type: "f", value: 0.5 },
            glowColor: { type: "c", value: new THREE.Color(0x00ffff) },
            spherePosition: { type: "v3", value: new THREE.Vector3() },
            sphereTexture : { type : "t",  value : new THREE.TextureLoader().load( "./earth.jpg" ) },

        },
        vertexShader:   document.getElementById( 'vertexShader'   ).textContent,
        fragmentShader: document.getElementById( 'fragmentShader' ).textContent,
        side: THREE.FrontSide,
        opacity: 1.0,
        // blending: THREE.AdditiveBlending,
        transparent: true
    }
    );

    earthGood = new THREE.Mesh( sphereGeom, customMaterial );
    earthBad = new THREE.Mesh( sphereGeom, customMaterial );

    earthGood.position.x = -70;
    earthBad.position.x = 70;

    scene.add( earthGood );
    scene.add( earthBad );
}

function animate() 
{
    requestAnimationFrame( animate );
    update();
    render();
}

function update()
{
    earthBad.rotation.y += 0.005;
    controls.update();
}

function render() 
{
    renderer.render( scene, camera );
}


