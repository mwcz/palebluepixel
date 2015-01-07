Title: Raspberry Pi Timelapse Camera
Date: 2014-05-15
Tags: programming, raspberry pi, photography, timelapse, camera
Image: /static/images/028/scene_morning_light.jpg
Mwc: 28
Draft: true

I built a timelapse camera with a raspberry pi.

Hardware:

 - [A small gorillapod][1]
 - [Raspbery Pi camera][2]
 - [Raspberry Pi Model B][rpib]

Software:

The scripts I wrote are pretty hasty.  I should tidy them up before publishing
this post.

![Timelapse scene](/static/images/028/scene_morning_light.jpg "Timelapse scene")

I didn't secure the pi very well when I first framed the shot, and it wound up
getting bumped several times.  Lesson learned: make sure 

File naming
-----------

I used Epoch time for the filenames.

    1396020890.jpg
    1396021196.jpg
    1396021502.jpg
    1396021808.jpg

This was a spontaneous decision, chosen for convenience, but turned out to have
some unexpected benefits.

Eliminating night-time shots was 

Doing some modulo math on the epoch times made isolating the dark hours easy.
Since Epoch time is measured in seconds, all we need to know is the number of
seconds in a minute, hour, and day.

    # number of seconds in a minute/hour/day
    minute = 60
    hour   = 3600
    day    = 86400

Now that we have those values, we can play around with [modulo][mod]
<sup>%</sup> math to find some cool stuff.

The first order of business is to eliminate any photos taken at nighttime,
because they're all too dark to be useful.  Using `1396020890` as an example...

        1396020890 % 86400 = 56090

`86400` is the number of seconds in a day, and what this operation does is
essentially remove the day/month/year components.  What's left is the time
since the stroke of midnight (still in seconds).

<figure>
    <div role="math">
        \dfrac{56090 seconds since midnight}{3600 seconds/hour}
    </div>
</figure>

Dividing 

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

<link rel="stylesheet" type="text/css" href="{filename}/static/js/033/katex/katex.min.css">
<script src="{filename}/static/js/033/katex/katex.min.js"></script>
<script>
    function set_vimeo_iframe_height() {
        var ifr = document.getElementById('dimo-demo');
        ifr.height = ifr.offsetWidth / (1280/720);
    }
    document.addEventListener('DOMContentLoaded', set_vimeo_iframe_height);
    window.addEventListener('resize', set_vimeo_iframe_height);
    function render_math() {
        katex.render(this.innerHTML, this);
    }
    $('[role=math]').each(render_math);
</script>

[1]: http://amzn.com/B008YE0HAW
[2]: http://www.raspberrypi.org/product/camera-module/
[3]: http://public.hronopik.de/vid.stab/features.php?lang=en "video stabilization in linux"
[epoch]: https://en.wikipedia.org/wiki/Epoch_time
[rpib]: https://en.wikipedia.org/wiki/Raspberry_Pi
[mod]: https://en.wikipedia.org/wiki/Modulo_operation
