---
categories: html5, canvas, color, image processing, jsimage
date: 2011/11/17 19:25:00
title: HTML5 canvas point operations
---

This is the last demo I made using [JSImage](https://github.com/mwcz/jsimage).  I created it some time around 2009-2010.  At the time, I had checked out an [imaging book](http://www.amazon.com/Digital-Image-Processing-Algorithmic-Introduction/dp/1846283795) from my university's library at least ten times.  Most of the exercises in that book I implemented in Python using [PIL](http://www.pythonware.com/products/pil/), but point operations were simple enough to port to JavaScript quickly.

Point operations are image alterations that affect all pixels equally.  Other operations, like blurring for example, each result pixel depends on adjacent pixels.

This demonstrates changing contrast, value, saturation, hue, color inversion, and threshold point operations.  Note that there is a bug with increasing value and increasing saturation which I never got around to fixing.

<script type="text/javascript" src="/js/005/jquery.min.js"></script> 
<script type="text/javascript" src="/js/005/jsimage.js"></script> 
<script type="text/javascript" src="/js/005/colorspace.js"></script> 

<script type="text/javascript"> 
           
    var img0; // make img0 public so I can play with it in firebug more easily

    window.onload = function() {
        img0 = new JSImage( "img0", "/img/005/bee.jpg" );
    }

</script> 


<canvas id="img0">your browser does not support canvas</canvas> 
 
<table cellpadding="4" cellspacing="0"> 
<tr> 

    <th>Value</th> 
    <th>Contrast</th> 
    <th>Saturation</th> 
    <th>Hue</th> 
    <th>Invert</th> 
    <th>Threshold</th> 
</tr> 

<tr> 
    <td> 
        <!-- using onmousedown instead of onclick because it improves perceived performance.
             definitely an accessibility problem, though --> 
        <input type="image" src="/img/005/arrow_up.png" onmousedown="img0.value( img0.canvas, 10 )" /> 
        <input type="image" src="/img/005/arrow_down.png" onmousedown="img0.value( img0.canvas, -10 )" /> 
    </td> 
    <td> 
        <input type="image" src="/img/005/arrow_up.png" onmousedown="img0.contrast( img0.canvas, 1.1)" /> 
        <input type="image" src="/img/005/arrow_down.png" onmousedown="img0.contrast( img0.canvas, 0.9)" /> 
    </td> 
    <td> 
        <input type="image" src="/img/005/arrow_up.png" onmousedown="img0.saturation( img0.canvas, 25 )" /> 
        <input type="image" src="/img/005/arrow_down.png" onmousedown="img0.saturation( img0.canvas, -25 )" /> 
    </td> 
    <td> 
        <input type="image" src="/img/005/arrow_up.png" onmousedown="img0.hue( img0.canvas, 20)" /> 
        <input type="image" src="/img/005/arrow_down.png" onmousedown="img0.hue( img0.canvas, -20)" /> 
    </td> 
    <td> 
        <button type="button" onmousedown="img0.invert()">invert</button> 
    </td> 
    <td> 
        <button type="button" onmousedown="img0.threshold( img0.canvas, document.getElementById('t').value )">threshold</button> 
        <br /> 
        <input type="text" value="127" maxlength="3" size="3" id="t" /> 
    </td> 
</tr> 

</table> 
