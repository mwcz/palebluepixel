Title: Visualizing Network Traffic with WebGL
Date: 2016-07-13
Tags: programming, javascript, threejs, webgl, 3d, web, redhat, redhat-summit
Summary: 
Image: /static/images/gallery/400x/gallery/039/DSCF0634.JPG
Gallery: 041
Mwc: 41
TwitterWidgetID: 647816206326595584
Status: draft

"*Cool,*" I thought, "*an excuse to play with WebGL at work!*"

This year, I had the good fortune to contribute to a keynote presentation at
[Red Hat Summit][summit].  This keynote specifically is presented every year by
Burr Sutter.  Burr is famous for giving complex live demos, and for being
uncannily immune to Murphy's Law.

Pipelined microservices were the subject of this year's demo.  To demonstrate
it, an audience of about 5,000 people played a videogame we created.  The game
was powered by five microservices: Achievement, Score, Mechanics, Gamebus, and
PlayerID.  While the audience played, new versions of those microservices were
deployed, either to a small number of users (canary) or by toggling between two
environments (blue/green).

My contribution was to give some extra visual punch to the active microservices
by visualizing every network request they send and receive.  For instance, when
a *blue* service toggles to *green*, it will be reflected in the patterns of
network traffic.

### Tiny Particles of Sand

While developing [DiMo][dimo-particles] and [Kimotion][kimotion-web], I became
fond of [three.js][threejs] particle systems for their power and flexibility.

<div class="row">
    <figure class="col-sm-6">
        <a href="/projects/dimo">
            <img src="/static/images/041/swath-colors.png" alt="DiMo picture" />
        </a>
        <figcaption>Particle gravity simulation in <a href="/projects/dimo">DiMo: Particles</a> (50,000 particles)</figcaption>
    </figure>
    <figure class="col-sm-6">
        <a href="/projects/kimotion">
            <img src="/static/images/041/kimotion-pic.jpg" alt="Kimotion picture" />
        </a>
        <figcaption>Rendering a Kinect depth field with 480,000 particles in <a href="/projects/kimotion">Kimotion</a></figcaption>
    </figure>
</div>

With an audience of 5,000 people generating network traffic, the number of
requests would exceed what could be comfortably rendered with DOM elements, CSS
transitions/animations, and JavaScript position updates.  WebGL particle
systems can handle thousands of particles without breaking a sweat.  It can
even handle millions of particles, although moving particles are often
bottlenecked by single-threaded CPU-based position updates.  Fancy [GPU
tricks][gpgpu] can beat that limitation, although such tricks are in their
infancy as far as WebGL goes.

The next step was to show that it's possible to overlay a 3D scene on top of a
standard webpage.  three.js makes it easy to give your scene a transparent
background, allowing the page to show through.  Here's a torus knot floating
over the pipeline.

![3d torus overlaid on standard webpage](/static/images/041/3d-overlay.png)

Interacting with the page below was still a problem though, because the
transparent canvas soaked up all mouse clicks.  The simple CSS property
`pointer-events: none` prevents the canvas from intercepting mouse and touch
events.

With that established, let's make some particles.

### It's Pixel Time

When a network request is detected, the particle system activates a tiny dot
which travels in an arc from point A to point B.  The arcs are defined by sine
waves.  Here are the particle arcs as they appear on-screen, and another shot
with sine wave guides showing.

<div class="row">
    <figure class="col-sm-6">
        <img src="/static/images/041/pipeline-nosines.png" alt="pipeline with traffic particles" />
        <figcaption>Pipeline with particle arcs</figcaption>
    </figure>
    <figure class="col-sm-6">
        <img src="/static/images/041/pipeline-sines.png" alt="pipeline with sine wave guides" />
        <figcaption>Pipeline with sine wave guides</figcaption>
    </figure>
</div>

To prevent the arcs from overlapping with each other, I increased each wave's
amplitude based on vertical distance to be traveled.  That's why the purple arc
is much smaller than the blue arc, which is smaller than the green arc, etc.

Initially, the particles traveled in a single-file line, which obscured the
number of particles.  Because of overlapping, 100 particles was
indistinguishable from 10,000.  To remedy that, I added a small random
horizontal offset to each particle.  The offset has less effect at the ends of
the arc, but causes the particles to fan out near the middle.

The particles that enter from the right side of the screen represent network
traffic from the audience.  As you can see in the video below, the origination
point of those particles moves randomly up and down to add more visual
interest.

### Together at Last

After months of collaborating from across the world, it was wonderful to meet
the whole team in person.  A few days later, all our hard work came together as
well.  All the preparation paid off and the demo worked perfectly.  Here's a
shot of my particle visualization from the official recording.

<video style="margin: 0 auto" poster="/static/images/041/traffic-thumb.jpg" autoplay controls loop>
    <source src="/static/videos/041/traffic.webm" />
    <source src="/static/videos/041/traffic.mp4" />
</video>



Watch the full keynote here:

<iframe style="display: block; margin: 0 auto;" width="100%" height="315" src="https://www.youtube.com/embed/ooA6FmTL4Dk" frameborder="0" allowfullscreen></iframe>

### Glow Rope

Early in the project, before traffic data was available, I used mouse
coordinates to control the path of each particle.  It was pretty fun, so I spun
it off into a simple demo called [Glow Rope][glow-rope].  Give it a try!

<figure>
    <a href="/demos/glow-rope"><img src="/static/images/041/glow-rope.png" alt="glow rope screenshot" /></a>
    <figcaption> <a href="/demos/glow-rope">Glow Rope</a> (mouse required) </figcaption>
</figure>

### Leaderboard

In addition to the network traffic visualization, I helped build the
leaderboard view to display the scores and achievements of the top 10 players.
[Andres][andres] created the beautiful design and handed me a static mockup
which I converted into a dynamic template using [Ractive][ractive].  I then
created a WebSocket connection to the *score microservice* to populate the
data.  Here's a shot of the winners from the live audience.

![photo of final leaderboard](/static/images/041/leaderboard-final.jpg)

### Next Year

The amount of work and preparation that goes into a presentation like this was
eye-opening for me.  A week out and tired to the bone, I was thinking "No way
am I doing this next year!"  But the thrill of everyone's hard work coming
together drove away any exhaustion.  I can't wait to see what we can cook up
next year.


[andres]: https://twitter.com/andresgalante/
[dimo-particles]: /projects/dimo
[glow-rope]: /demos/glow-rope
[kimotion-web]: http://kimotion.xyz
[ractive]: http://ractivejs.org/
[summit]: https://www.redhat.com/summit
[threejs]: http://threejs.org
[video]: https://www.youtube.com/watch?v=ooA6FmTL4Dk
[gpgpu]: https://en.wikipedia.org/wiki/General-purpose_computing_on_graphics_processing_units