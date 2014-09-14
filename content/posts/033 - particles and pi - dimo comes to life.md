Title: Particles and π - DiMo Comes to Life
Date: 2014-08-25
Tags: programming, javascript, requirejs, amd, threejs, webgl, 3d, art



I have no prior experience with OpenGL

topics to cover:

 - player movement smoothing low-pass
 - particle coloring methods
   * random initial colors
   * accel and velocity-based sine cycles [pictures and/or videos!]
 - player tracking
   * link to ian's site (???) and describe the server piece
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
