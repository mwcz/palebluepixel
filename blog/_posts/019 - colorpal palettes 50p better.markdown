---
categories: html5, javascript, color
date: 2012/02/10 22:44:50
title: ColorPal gets a mean cut!
draft: true
---

ColorPal got an upgrade!

![ColorPal logo](/img/019/colorpal_logo.png)

In my [last post](/2012/01/16/colorpal-alpha/) on the subject, I introduced
ColorPal, my HTML5 color palette generation tool.

Why the 'median' in median-cut?
===============================

Why the 'median' in median-cut?
-------------------------------

(which title is better?)

Mean, median, and mode all attempt to measure the
[location](http://en.wikipedia.org/wiki/Location_parameter) of a probability
distribution.  When worded more intuitively... they try to find the center of a
set of numbers.  They just employ different definitions of "center".

![mean, median, and mode graphed](/img/019/mean_median_mode.png)
(Thanks [Wikipedia](http://en.wikipedia.org/wiki/Median))

As you can see, the mean tends to follow the tail.  In an image, outliers are
important, and the mean gives them more credence than the others.

Interestingly, photographs of nature tend to have nice, close-to-normal color
distributions.

![Forest red   pixel distribution](/img/019/forest_r.png)
![Forest green pixel distribution](/img/019/forest_g.png)
![Forest blue  pixel distribution](/img/019/forest_b.png)

![City   red   pixel distribution](/img/019/city_r.png)
![City   green pixel distribution](/img/019/city_g.png)
![City   blue  pixel distribution](/img/019/city_b.png)

What's next?  Color spaces.
---------------------------

My next test will be converting to a color space other than RGB.

HSL is common, and the RGB<->HSL conversion formulas are in my very old JSImage
project.  It may not turn out well, though, as the concept of "widest box"
loses most of its meaning when each axis is a completely different unit of
measure.  Although, in a way, I suppose RGB has a similar problem.  Red, Green,
and Blue could be thought of as unrelated units.  I'll try it out and see how
it goes.  I wonder if my old JavaScript RGB<->HSL code has rotted away yet...

Most likely, I'll skip HSL and try one of the
[Lab](http://en.wikipedia.org/wiki/Lab_color_space) color spaces first.  There
are three "Lab" color spaces: XYZ, Hunter-Lab, and CIELAB.  XYZ will be first
to the plate, since the RGB<->XYZ formulas are simpler.  Let me take this
opportune moment to plug
[EasyRGB.com](http://www.easyrgb.com/index.php?X=MATH).

Lend a hand
-----------

As I've mentioned before, ColorPal is in an early stage of development.  It
needs testing in multiple browsers, and I'm very interested in hearing people's
feedback.  Code development help is welcomed too.

If you try out ColorPal, shoot me an [email](mailto:mwc@clayto.org)
or give me a shout on [Twitter](https://twitter.com/#!/mwcz) with your
thoughts.  Thanks!

Here are github repos for [ColorPal](https://github.com/mwcz/ColorPal) and
[median-cut.js](https://github.com/mwcz/median-cut-js).

