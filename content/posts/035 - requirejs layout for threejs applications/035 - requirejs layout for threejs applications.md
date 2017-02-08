Title: A RequireJS Architecture for ThreeJS Applications
Date: 2014-09-20
Tags: programming, javascript, requirejs, amd, threejs, webgl, 3d, web
Mwc: 35
Status: draft
TwitterWidgetID: 552862041153998849

While working on [DiMo][dimo], I found myself at the [ThreeJS
examples][threejsexamples] page quite often, searching for working examples.

    <script id="vertexShader" type="x-shader/x-vertex">
        <!-- dozens of lines of vertex shader (GLSL) code -->
    </script>

    <script id="fragmentShader" type="x-shader/x-fragment">
        <!-- dozens of lines of fragment shader (GLSL) code -->
    </script>

    <script>
        <!-- hundreds of lines of ThreeJS code -->
    </script>

I do believe that's the best way to distribute *demos*.  Sometimes sloppier
something looks, the more people will hack on it, and I mean that in the
kindest possible way.  Hackiness begets hackers.

<pre style="line-height: 1.2"><code style="line-height: 1"><!--
-->src
├── index.html
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
    └── libraries like threejs, datgui, et al
</code></pre>

I have absolutely no experience architecting 3D applications, so the actual
separations of concern are probably quite misguided!  However, even if
misguided, it proved to be much easier to work with than a single monolithic
script file.

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

<script>
$('pre code').each(add_prism_js);
function add_prism_js(i, el) {
    $(el).addClass('language-markup');
}
</script>

[dimo]: /projects/dimo
[threejsexamples]: http://threejs.org/examples/
