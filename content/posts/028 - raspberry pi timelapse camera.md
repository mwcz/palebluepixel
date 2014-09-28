Title: Raspberry Pi Timelapse Camera
Date: 2014-05-15
Tags: programming, raspberry pi, photography, timelapse, camera
Status: draft

I built a timelapse camera with a raspberry pi.

Hardware:

 - [A small gorillapod][1]
 - [Raspbery Pi camera][2]

Software:

The scripts I wrote are pretty hasty.  I should tidy them up before publishing
this post.

![Timelapse scene](/static/images/028/scene_morning_light.jpg "Timelapse scene")

I didn't secure the pi very well when I first framed the shot, and it wound up
getting bumped several times.  After being bumped, it would continue to take
shots for hours (or days).

After compiling all the still images into a video, the bumps are extremely
jarring.  To alleviate that problem, I used [Georg Martius' vid.stab][3] to
stabilize the video.

File naming
-----------

I used Epoch times as filenames.

    1396020890.jpg
    1396021196.jpg
    1396021502.jpg
    1396021808.jpg

This was a spontaneous decision, but turned out to have some unexpected
benefits.  Eliminating night-time shots was one of them, since it involved only
some pretty simple algebra, and no messy date math.

Doing some modulo math on the epoch times made isolating the dark hours easy.
All we need to know is the number of seconds in a minute, hour, and day.

    minute = 60
    hour   = 3600
    day    = 86400

Let's say we want to eliminate any shot taken between 8 PM and 7 AM.  Take the
first timelapse shot above, `1396020890`.

    time = 1396020890
    seconds_after_midnight = time % day # gives us the number of seconds after midnight
    hours_after_midnight = (seconds_after_midnight) / hour # gives us the number of hours after midnight
    local_hour = hours_after_midnight - 4 # I'm in EST, so -4 GMT
    if local_hour < 7  or local_hour > 20: skip

Loops vs cron
-------------

The script contains an infinite loop with a 5m `sleep` command.  Thus the
pictures weren't taken every 5 minutes, but rather every 5-and-some-change
minutes.  This drift doesn't matter for intervals several minutes long, or
longer, but if the interval were much shorter, it could be a big problem.  An
interval of 5m + 5s drift isn't a big deal.

With my D600 I take timelapses with intervals of 10 seconds.  There's no drift
with my intervalometer, but I couldn't take a timelapse that tight with my
current raspi timelapse script.  The drift would add about 50% to the interval,
throwing the ending framerate off completely.


[1]: http://amzn.com/B008YE0HAW
[2]: http://www.raspberrypi.org/product/camera-module/
[3]: http://public.hronopik.de/vid.stab/features.php?lang=en "video stabilization in linux"
