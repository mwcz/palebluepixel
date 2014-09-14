Title: Particles and π - DiMo Comes to Life
Date: 2014-08-25
Tags: programming, javascript, requirejs, amd, threejs, webgl, 3d, art
Image: /static/images/033/ring-anim.gif

[TOC]


A player walks up Fayetteville St in Raleigh, North Carolina.
[SparkCon][sparkcon] has begun, and dozens of artists are strewn along the
street, hard at work creating elaborate chalk art on the asphalt.  A light rain
is falling, and some artists are holding umbrellas over their work, some have
draped tarps over themselves and their sketches, but most don't seem to care,
as if creating their art is more important than how long it lasts.

Up ahead is a gnarly-looking wrought-iron handrail covered in small
stegasaurus-like spikes.  The spikes make its use as a handrail questionable,
but it does serve well to keep pedestrians from plummeting into the stairwell
below.

The stairwell looks dingy, but a large green arrow points down, and so she
descends to escape the rain.

It's very dark inside, but she finds three glowing batons lying on a pedistal.
One red, one green, and one blue.  On the far wall, masses of colored dots
swirl around three circles, also red, green, and blue.  She picks up the red
baton, and the red circle moves.

![silhouettes of players playing dimo]({filename}/static/images/033/silhouette-chairs-dimo.jpg "silhouettes of players playing dimo")

A camera mounted on a high wall reads the position of the 

# Players
## camera input
### link to Ian's site, 
## movement smoothing low-pass
## websockets & json

# particles
## coloring methods
### accel and velocity-based sine cycles [pictures and/or videos!]
### shaders (glsl essentials)

# application concerns
## architecture (threejs app design tendencies and how to overcome them)

# configuration
## datgui and presets (preset screenshots)

# resources
## glsl essentials
## threejs

# thanks
## ian
## ben
## justis
## the volunteers
## raleigh fish market
## geekspark and sparkcon
## the visitors!


 - threejs features being used
 - datgui
 - threejs + requirejs architecture
 - 

![Roughly evenly-spaced sine waves][sinewaves]

The functions are roughly:

    red(x)   = ( sin( accel_m * pi * 2 + 2.25 * pi/4 ) + 1 )/2
    green(x) = ( sin( accel_m * pi * 2 + 5    * pi/4 ) + 1 )/2
    blue(x)  = ( sin( accel_m * pi * 2 + 7.5  * pi/4 ) + 1 )/2

TODO: update the functions above to actually reflect what's in DiMo

Near the end of the project, things were going well.  The gravity felt great,
player movements were smooth, 50,000 particles ran pretty smoothly on a common
laptop, and player recognition was perfect.  The one thing that was lacking is
it didn't *look* spectacular.  In essence, it looked cool, but only to geeks.


[sinewaves]: {filename}/static/images/033/sine_waves.png
[sparkcon]: http://www.sparkcon.com/
