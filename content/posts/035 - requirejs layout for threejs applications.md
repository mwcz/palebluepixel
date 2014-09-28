Title: A RequireJS Architecture for ThreeJS Applications
Date: 2014-09-20
Tags: programming, javascript, requirejs, amd, threejs, webgl, 3d
Published: true
Status: draft

While working on DiMo, I found myself at the [ThreeJS
examples][threejsexamples] page quite often, searching for working examples.

    <html lang="en">
        <head>
            <title>a threejs app!</title>
        </head>
        <body>

            <script src="../build/three.min.js"></script>

            <script id="vertexShader" type="x-shader/x-vertex">
                <!-- dozens of lines of vertex shader (GLSL) code -->
            </script>

            <script id="fragmentShader" type="x-shader/x-fragment">
                <!-- dozens of lines of fragment shader (GLSL) code -->
            </script>

            <script>
                <!-- hundreds of lines of ThreeJS code -->
            </script>

        </body>
    </html>

With luck, the ThreeJS code might reside in a separate `.js` file, but that's
the extent of the 

    src
    ├── index.html
    ├── css
    │   └── app.scss
    ├── img
    │   └── many images
    ├── js
    │   ├── camera.js
    │   ├── config.js
    │   ├── config-panel.js
    │   ├── gravity.js
    │   ├── main.js
    │   ├── mouse.js
    │   ├── origin.js
    │   ├── particle_colors.js
    │   ├── particles.js
    │   ├── player_colors.js
    │   ├── players.js
    │   ├── presets.js
    │   ├── require.config.js
    │   ├── scene.js
    │   ├── timer.js
    │   └── viewport.js
    ├── shaders
    │   ├── particle.frag
    │   ├── player.frag
    │   └── vertex.vert
    └── lib
        └── requirejs, threejs, datgui, et al

I have absolutely no experience architecting 3D applications, so the actual
separations of concern are probably quite misguided!  However, even if
misguided, it proved to be much easier to work with than a single monolithic
HTML file.

    <!doctype html>
    <html>
    <head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">

        <title>Geekspark DiMo</title>

    <link href="css/app.min.css" rel="stylesheet" type="text/css">

    </head>
    <body>

    <script data-main="js/require.config" src="lib/requirejs/require.js"></script>

    </body>
    </html>



[threejsexamples]: http://threejs.org/examples/
