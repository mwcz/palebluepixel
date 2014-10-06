Title: DiMo: The Deconstruction of Falling Stars
Date: 2014-09-20
Tags: programming, javascript, requirejs, amd, threejs, webgl, 3d, art, sparkcon, geekspark
Image: /static/images/034/ring-explosion.png
Summary: How DiMo was made.

Everything is made out of something else.

[Live demo][demo]

# Players

Players wave batons around and cool stuff happens!

## camera input

Camera input is analysed by OpenCV.

The visualization uses [WebSockets][ws] to connect to a Python server.  That
Python server, in turn, connects to a webcam and uses [OpenCV][opencv] to find
the locations of the red, green, and blue batons.  It then relays the
coordinates of each baton back to the visualization, which draws them on the
screen.

Near the end of the project, things were going well.  The gravity felt great,
player movements were smooth, 50,000 particles ran pretty smoothly on a common
laptop, and player recognition was perfect.  The one thing that was lacking is
it didn't *look* spectacular.  In essence, it looked cool, but only to geeks
who .


## movement smoothing low-pass

The movement was jerky, so I smoothed it.

## websockets & json

The Python server listens for incoming websocket connections.  When the DiMo
webpage is visited, it establishes a websockets connection with the server.
Then they trade places, and the webpage listens for messages from the server.

# particles

Particles swirl around and look cool.

## gravity

Gravity has been written a few times.  First with inlined calculations, then
with ThreeJS vector objects, then with [glmatrix][glm], and then inlined again.
The inlined code performance wasn't distinguishable from the glmatrix
implementation.  Since the glmatrix API, although a little unconventional, is
excellent and much more readable, I stuck with it.

ThreeJS's vector calculations, on the other hand, were awful.  Each function
call created a new vector object.  Each acceleration calculation caused the
creation of 12 vector objects.

     10,000 particles    *
        60 fps           *
        12 objects       *
         3 player pieces
    ---------------------------------
     21,600,000 new objects per second

Needless to say, the performance was terrible.  glmatrix's in-place vector
operations solved this, and due to the better readability, it won out over
inline calculations.

## coloring methods
### accel and velocity-based sine cycles [pictures and/or videos!]

Trigonometry and web development aren't a pair usually seen together in public.

Originally, each particle in dimo was given a color of either red, green, or
blue, assigned randomly when the simulation started.

![silhouettes of players playing dimo][random-colors]

This *isn't* one of those rare miracles where randomness is beautiful.

<figure>
    <div class="math">
        x = \dfrac{2\pi \cdot \lvert\vec{v}\rvert \cdot \lvert\vec{a}\rvert}{a_{max}}
    </div>
    <div class="math">
        \red{R(x)} = \cos(x + 1.76714) + 1) / 2
    </div>
    <div class="math">
        \green{G(x)} = \cos(x + 3.92699) + 1) / 2
    </div>
    <div class="math">
        \blue{B(x)} = \cos(x + 5.89048) + 1) / 2
    </div>
</figure>

The range of `cos` and `sin` are `-1..1`, but the color values I needed are
`0..1`.  The `+1` addition shifts the output into `0..2`, and the `/2` division
scales it down to `0..1`.

When graphed, they look like this.

![Roughly evenly-spaced sine waves][sinewaves]

These functions provide a pleasing cycling between the three colors.  Here's
the result.

![image of the swaths of color][swath-colors]

Yes!  Swaths of color, cycling through the spectrum like a rainbow.

### shaders (glsl essentials)

# application concerns
## architecture (threejs app design tendencies and how to overcome them)

# configuration
## datgui and presets (preset screenshots)

<link rel="stylesheet" type="text/css" href="{filename}/static/js/033/katex/katex.min.css">
<script src="{filename}/static/js/033/katex/katex.min.js"></script>
<script>
function render_math() {
    katex.render(this.innerHTML, this);
}
$('.math').each(render_math);
</script>

[sinewaves]: {filename}/static/images/034/sine_waves.png
[demo]: /static/projects/dimo/
[sparkcon]: http://www.sparkcon.com/
[geeksparkrh]: https://github.com/geekspark-rh/
[renderer]: https://github.com/geekspark-rh/dimo-renderer
[justis]: https://twitter.com/justis
[iphands]: https://twitter.com/ianpagehands
[gpucalc]: http://vimeo.com/97329154
[ws]: https://en.wikipedia.org/wiki/WebSocket
[opencv]: http://opencv.org/
[random-colors]: {filename}/static/images/034/random-colors.png
[swath-colors]: {filename}/static/images/034/swath-colors.png
[glm]: http://glmatrix.net/
