Title: Make a Kimotion!
Date: 2015-09-17
Tags: programming, javascript, threejs, webgl, 3d, 2d, art, sparkcon, geekspark, dimo, physics, web, kimotion
Gallery: 039
Mwc: 39
Status: draft


A year ago, I had the joy of working on Digital Motion, an interactive digital
art exhibit for Raleigh's annual art festival, [SPARKcon][sparkcon].  It was a
crazy weekend, full of children and adults jumping around in front of our
reactive display.  The month leading up to SPARKcon was a mad dash of
perfecting the graphics and physics equations of my [DiMo:
Particles][dimo-particles] display.

My biggest lesson from the project was the following:

*Creating interactive art exhibits from scratch is hard.  Maybe I can make it
easier...*

As a stubbornly persistent programmer, I was able to get past the barriers, as
were Jonathan Rippy and Wray Bowling, who also [created visualizations][osdc].
The three of us each started from scratch, with only a few lines of shared
WebSockets code.  I spent an extimated 80 hours building [DiMo:
Particles][dimo-particles], mostly false starts and glitch hunting.  I'm sure
Wray and Rippy have similar stories.

{{ gallery }}

Creative coding is so much fun that I can't help but want more people to get
involved.  Nothing cures curmudgeony coders faster than working on a project
where breaking things usually makes it *better*.

With the steep learning curve, though, few would get involved.  There would
need to be a shared foundation to build upon.  It should be easy to install and
start coding.

![kimotion thumbnails][thumbnails]

[Kimotion][kimotion-web]
[View source][kimotion-code]

*Over a thousand* people visited our exhibit last weekend.

Kimotion is a framework for building interactive art exhibits.

Mods can be written using either [p5][p5js] or [ThreeJS][threejs].  p5 gets
your ideas onto the screen quickly with 2D drawing functions like `rect()` to
draw a rectangle, and `line()` to draw a line.  ThreeJS has a steeper learning
curve, but enables detailed 3D scenes.

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

[kimotion-web]: http://kimotion.xyz
[kimotion-code]: https://github.com/mwcz/Kimotion
[thumbnails]: {filename}/static/images/039/thumbnails.png
[p5js]: http://p5js.org
[threejs]: http://threejs.org
[dimo-particles]: /projects/dimo
[sparkcon]: https://en.wikipedia.org/wiki/Sparkcon
[osdc]: http://opensource.com/life/15/2/sparkcon-geekspark-digital-motion-exhibit
