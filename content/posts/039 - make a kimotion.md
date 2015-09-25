Title: Make a Kimotion!
Date: 2015-09-17
Tags: programming, javascript, threejs, webgl, 3d, 2d, art, sparkcon, geekspark, dimo, physics, web, kimotion
Gallery: 039
Mwc: 39

### Last year's lessons

A year ago, I had the joy of working on Digital Motion, a reactive art exhibit
for Raleigh's annual art festival, [SPARKcon][sparkcon].  The month leading up
to SPARKcon was a mad dash of perfecting the graphics and physics equations of
my [DiMo: Particles][dimo-particles] display.  After a wonderful weekend of
watching visitors enjoy the weird thing I made, a single idea began congealing
in my mind.

*Creating interactive art exhibits from scratch is **really** hard.  Maybe I
can share the hard part, so others can focus on the art...*

Creative coding is *so much fun* that I can't help but wish more people were
involved.  Nothing cures curmudgeony coders faster than working on a project
where mistakes often make it *better*.  With such a steep learning curve,
though, few would get involved.  There would need to be a shared foundation.

### Enter Kimotion 

[Kimotion][kimotion-web] is a framework for building interactive art exhibits.

Kimotion will appeal mostly to the Programmer Artist types.  Think "Warrior
Poet", but with keyboards.  With it, you can create a "mod" which is
essentially your own blank canvas.  On the canvas, you can paint pixels, but
not boring, everyday pixels.  What you paint can be animated by the movements
of the people in the room.

These videos offer a better description than I can offer with words.

<iframe id="vimeo-player" src="https://player.vimeo.com/video/136951447" width="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

<div class="vimeo-thumbnail"> <img src="http://kimotion.xyz/images/video_thumbnails/9.jpg" data-vid-src="https://player.vimeo.com/video/136951447" /> </div>
<div class="vimeo-thumbnail"> <img src="http://kimotion.xyz/images/video_thumbnails/8.jpg" data-vid-src="https://player.vimeo.com/video/136950949" /> </div>
<div class="vimeo-thumbnail"> <img src="http://kimotion.xyz/images/video_thumbnails/7.jpg" data-vid-src="https://player.vimeo.com/video/136128034" /> </div>
<div class="vimeo-thumbnail"> <img src="http://kimotion.xyz/images/video_thumbnails/6.jpg" data-vid-src="https://player.vimeo.com/video/136126008" /> </div>
<div class="vimeo-thumbnail"> <img src="http://kimotion.xyz/images/video_thumbnails/5.jpg" data-vid-src="https://player.vimeo.com/video/133870922" /> </div>
<div class="vimeo-thumbnail"> <img src="http://kimotion.xyz/images/video_thumbnails/4.jpg" data-vid-src="https://player.vimeo.com/video/129939012" /> </div>
<div class="vimeo-thumbnail"> <img src="http://kimotion.xyz/images/video_thumbnails/3.jpg" data-vid-src="https://player.vimeo.com/video/126292045" /> </div>
<div class="vimeo-thumbnail"> <img src="http://kimotion.xyz/images/video_thumbnails/2.jpg" data-vid-src="https://player.vimeo.com/video/124988550" /> </div>
<div class="vimeo-thumbnail"> <img src="http://kimotion.xyz/images/video_thumbnails/1.jpg" data-vid-src="https://player.vimeo.com/video/124559463" /> </div>

Depending on your preferences, a mod can be written using either [p5][p5js] or
[ThreeJS][threejs].  p5 gets your ideas onto the screen quickly with 2D drawing
functions like `triangle()` to draw a triangle, and `line()` to draw a line.
ThreeJS has a steeper learning curve, but enables detailed 3D scenes.

[View source][kimotion-code]

### The design of Kimotion

### The night before

### The weekend

*Over a thousand* people visited our exhibit last weekend.

### The future


### Credits

 - **Greg Gardner** for taking over and perfecting the kimotion server,
   implementing record/replay for easy development, and helping me debug
   *countless* graphical glitches and client issues, and being a software
   architecture guiding hand
 - **Jared Sprague** for creating the immaculate Fish game, beloved by all
   children, building a new computer to run the exhibit, and cohosting the
   event with me
 - **Ben Pritchett** for tutorial docs and the great Snake mod
 - **Dave Yarwood** for contribution to docs, great questions, and
   allllllmost-finished music mod
 - **Kevin Howell** for creating the enigmatic, unexplainable, and beautiful
   Spiral mod
 - **Ian Hands** for looping me into the most fun project I've ever worked on
 - **Mary Hands** for saving the entire exhibit friday night when we were
   flummoxed by hardware failure
 - **Kyle Buchanan** for great questions and alllllllmost finishing his
   Starfighter mod
 - **Justis Peters** for paving the DiMo trail for the rest of us to follow
 - **Rowen Sprague** for being the official tester

{{ gallery }}

<style type="text/css">
.vimeo-thumbnail {
    cursor   : pointer;
    position : relative;
    z-index  : 9;
    display  : inline-block;
    width    : 32.2%;
}

.vimeo-thumbnail::before {
    color       : white;
    content     : "\25B6";
    opacity     : 0.8;
    position    : absolute;
    display     : block;
    text-shadow : 0 0 6px black;
    z-index     : 100;
    font-size   : 50px;
    left        : 50%;
    top         : 42%;
    transform   : translate(-50%, -50%);
}

.vimeo-thumbnail:hover::before {
    opacity     : 1;
    text-shadow : 0 0 6px white;
}
</style>

<script>
var iframe = $('iframe#vimeo-player');

function handle_vid_click() {
    iframe.attr('src', $(this).find('[data-vid-src]').attr('data-vid-src') + '?autoplay=1');
}

function init_vimeo_picker() {
    // get every img with data-vid-src
    // get ref to iframe
    // create onclick for each img which sets iframe's src to data-vid-src
    var vidlinks = $('.vimeo-thumbnail');
    vidlinks.on('click', handle_vid_click);
}

init_vimeo_picker();

function set_vimeo_iframe_height() {
    iframe.attr('height', iframe.width() / (1280/720) );
}

document.addEventListener('DOMContentLoaded', set_vimeo_iframe_height);
window.addEventListener('resize', set_vimeo_iframe_height);
</script>

[kimotion-web]: http://kimotion.xyz
[kimotion-code]: https://github.com/mwcz/Kimotion
[kimotion-videos]: http://kimotion.xyz/#videos
[thumbnails]: {filename}/static/images/039/thumbnails.png
[p5js]: http://p5js.org
[threejs]: http://threejs.org
[dimo-particles]: /projects/dimo
[sparkcon]: https://en.wikipedia.org/wiki/Sparkcon
[osdc]: http://opensource.com/life/15/2/sparkcon-geekspark-digital-motion-exhibit
