Title: RGB WebGL Color Cube
Date: 2014-03-23
Tags: html5, javascript, color, colorpal, webgl
Image: /static/images/026/colorcube.jpg

I spent a bit of time this weekend building an RGB color cube for
[ColorPal][4], using [Three.js][1].

<a class="btn btn-primary btn-lg" href="/static/projects/colorpal_colorcube">Try it out!</a>
or [view the code][5].

If your web browser isn't WebGL-enabled, here's a screenshot:

![Screenshot of ColorCube](/static/images/025/screenshot.png "Screenshot of ColorCube")

[Three.js][1] has proven to be pretty fun.  The documentation is decent, but
not comprehensive.  Some parts of the API are filled with "todo" notes instead
of actual documentation.

The omissions in the documentation are made up for by the extensive [set of
code examples][2].

Colored particles
=================

The color cube uses a particle system to render 2D color points inside a 3D
cube.  The hardest part of the implementation was figuring out how to allow
each point to be a different color.

Eventually I found a [particle system demo with colors][3], which held the key.

By setting `vertexColors: true` on the `ParticleSystemMaterial`, Three.js will
match each vertex in the `vertices` array with a color in the `colors` array.
`vertices[1726]` will use `colors[1726]`, for example.

A vertex and a color are created for each pixel in the source image.  For the
vertex, <span style="color: red;">red</span> values are mapped to the `X` axis,
and similarly <span style="color: green">green</span> to `Y` and <span
style="color: blue">blue</span> to `Z`.

Optimization
============

Rendering a point for each pixel in a huge image image would be overkill, so
I used the pixel culling already present in ColorPal to scale the number of
points down to a more reasonable `16384`.

Now I'm racking my brain for an excuse to use WebGL at Red Hat...

Any ideas?

[1]: http://threejs.org
[2]: http://threejs.org/examples/
[3]: http://threejs.org/examples/#webgl_particles_billboards_colors
[4]: http://colorpal.org
[5]: https://github.com/mwcz/mwcz/blob/master/content/static/projects/colorpal_colorcube/js/cp-colorcube.js
