Title: Make a Kimotion!
Date: 2015-09-26
Tags: programming, javascript, threejs, webgl, 3d, 2d, art, sparkcon, geekspark, dimo, physics, web, kimotion
Summary: Kimotion is a new framework for building interactive art exhibits.  It will appeal mostly to the Programmer Artist types.  Think "Warrior Poet", but with keyboards.
Image: /static/images/gallery/400x/gallery/039/DSCF0634.JPG
Gallery: 039
Mwc: 39
TwitterWidgetID: 647816206326595584

A year ago, I had the joy of working on Digital Motion, an [interactive
art][intart] exhibit for Raleigh's annual art festival, [SPARKcon][sparkcon].
The month leading up to SPARKcon 2014 was a mad dash of perfecting the graphics
and physics equations of my [DiMo: Particles][dimo-particles] display.  After a
wonderful weekend of watching visitors enjoy the weird things we made, a lesson
began congealing itself in my mind.

*Creating interactive art exhibits from scratch is **really** hard.  Maybe I
can share some of this work, so others can focus on the art...*

Creative coding is *so much fun* that I can't help but wish more people were
involved.  Nothing cures curmudgeony coders faster than working on a project
where mistakes often make it *better*.  With such a steep learning curve,
though, few would get involved.  There would need to be a shared foundation.

### Enter Kimotion

[Kimotion][kimotion-web] is a new framework for building interactive art
exhibits.  It will appeal mostly to the Programmer Artist types.  Think
"Warrior Poet", but with keyboards.

With Kimotion, you can create a "mod" which is essentially your own blank
canvas.  On the canvas, you can paint pixels, but not boring, everyday pixels.
What you paint can be animated by the movements of the people in the room.

Videos speak louder than text, so here are some videos of a variety of mods.

<figure>
    <iframe id="vimeo-player" src="https://player.vimeo.com/video/136951447" width="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    <div class="vimeo-thumbnails">
    <div class="vimeo-thumbnail"> <img src="http://kimotion.xyz/images/video_thumbnails/9.jpg" data-vid-src="https://player.vimeo.com/video/136951447" /> </div>
    <div class="vimeo-thumbnail"> <img src="http://kimotion.xyz/images/video_thumbnails/11.jpg" data-vid-src="https://player.vimeo.com/video/137905577" /> </div>
    <div class="vimeo-thumbnail"> <img src="http://kimotion.xyz/images/video_thumbnails/3.jpg" data-vid-src="https://player.vimeo.com/video/126292045" /> </div>
    <div class="vimeo-thumbnail"> <img src="http://kimotion.xyz/images/video_thumbnails/10.jpg" data-vid-src="https://player.vimeo.com/video/137762679" /> </div>
    <div class="vimeo-thumbnail"> <img src="http://kimotion.xyz/images/video_thumbnails/6.jpg" data-vid-src="https://player.vimeo.com/video/136126008" /> </div>
    <div class="vimeo-thumbnail"> <img src="http://kimotion.xyz/images/video_thumbnails/5.jpg" data-vid-src="https://player.vimeo.com/video/133870922" /> </div>
    </div>
</figure>

I began building Kimotion in February of 2015, well in advance of SPARKcon X,
which took place in September.  This was a far cry from the single month of
harebrained scampering of the year before!  The extra time, and the existance
of a true framework, allowed many more people to create visualizations (aka
"mods").  In the end, fifteen mods were created in time for the SPARKcon
exhibit.

*Over a thousand* people visited our exhibit last weekend.  It's hard to put
into words how rewarding it is to see so many children and adults enjoy the sum
of our planning, hard work, and creativity.

### Gallery

Here are some photos from SPARKcon X (2015), and setup the night before.

$GALLERY

### The future

What's next for Kimotion?  Several SPARKcon attendees had excellent ideas.
From installing Kimotion in schools to putting a permanent installation in
their own homes.

I love the school idea in particular because, if last weekend was any
indication, kids love this thing and it really encouraged them to move (a lot).

It would cost a school system very little.  Schools already have (one would
hope) computers and projectors or smartboards.  Kimotion itself is free and
open-source.  The only cost would be the Kinect.  First-edition Kinects often
sell for less than $30 each.  If anyone on a PTA or school board reads this and
finds it interesting, <a href="mailto:mwc@clayto.com">email</a> or <a
href="https://twitter.com/mwcz">tweet</a> me.

I started Kimotion with the hope that it would encourage programmers to use
their skills to create elegance that everyone can appreciate.  If children are
also encouraged to exercise, I won't complain!

### E Pluribus Unum

I can't express how grateful I am to everyone who contributed to Kimotion
itself, created mods, and made the Digital Motion exhibit at SPARKcon a huge
success this year.

<dl>
<dt>Greg Gardner</dt>
<dd>for taking over and perfecting the kimotion server, implementing record/replay for easy development, and helping me debug *countless* graphical glitches and client issues, and being a software architecture guiding hand</dd>
<dt>Jared Sprague</dt>
<dd>for creating the immaculate Fish game mod, beloved by all children, building a new computer to run the exhibit, and cohosting the event with me</dd>
<dt>Ben Pritchett</dt>
<dd>for writing tutorial documentation and the great Snake mod</dd>
<dt>Cas Roberts</dt>
<dd>for endless encouragement and great ideas, including the very successful recording/replay scheme</dd>
<dt>Truett Thompson</dt>
<dd>for keeping geekSPARK on track, on schedule, and funded</dd>
<dt>Kevin Howell</dt>
<dd>for creating the enigmatic, unexplainable, and beautiful Spiral mod</dd>
<dt>Ian Hands</dt>
<dd>for looping me into the most fun project I've ever worked on</dd>
<dt>Noel White</dt>
<dd>for so much organizational geekSPARK work and fundraising</dd>
<dt>Mary Hands</dt>
<dd>for saving the entire exhibit friday night when we were flummoxed by hardware failure</dd>
<dt>Kyle Buchanan</dt>
<dd>for great questions and alllllllmost finishing his Starfighter mod</dd>
<dt>Justis Peters</dt>
<dd>for paving the DiMo trail for the rest of us to follow</dd>
<dt>Dave Yarwood</dt>
<dd>for contribution to docs, great questions, and allllllmost-finished music mod</dd>
<dt>Rowen Sprague</dt>
<dd>for being the official tester</dd>
</dl>

### More information

 - [Kimotion main project page][kimotion-web]
 - [Kimotion source code][kimotion-code]
 - [More about last year's exhibit][dimo-particles]
 - [Opensource.com article about DiMo 2014][osdc]
 - [The Deconstruction of Falling Stars]({filename}/posts/034 - the deconstruction of falling particles/034 - the deconstruction of falling particles.md) - technical info about how it was built
 - [Particles and π - DiMo Comes to Life]({filename}/posts/033 - particles and pi - dimo comes to life/033 - particles and pi - dimo comes to life.md) - more about the exhibit at SPARKcon!

<style type="text/css">
.vimeo-thumbnails {
    display: grid;
    grid-gap: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
.vimeo-thumbnail {
    cursor   : pointer;
    position : relative;
    z-index  : 9;
    display  : inline-block;
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
[thumbnails]: {attach}thumbnails.png
[p5js]: http://p5js.org
[threejs]: http://threejs.org
[dimo-particles]: /projects/dimo
[sparkcon]: https://en.wikipedia.org/wiki/Sparkcon
[osdc]: http://opensource.com/life/15/2/sparkcon-geekspark-digital-motion-exhibit
[intart]: https://en.wikipedia.org/wiki/Interactive_art
