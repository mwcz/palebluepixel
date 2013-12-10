Title: HTML5 canvas point operations
Date: 2011-11-17 19:25:00
Tags: html5, canvas, color, image processing, jsimage

This is the last demo I made using [JSImage](https://github.com/mwcz/jsimage).  I created it some time around 2009-2010.  At the time, I had checked out an [imaging book](http://www.amazon.com/Digital-Image-Processing-Algorithmic-Introduction/dp/1846283795) from my university's library at least ten times.  Most of the exercises in that book I implemented in Python using [PIL](http://www.pythonware.com/products/pil/), but point operations were simple enough to port to JavaScript quickly.

Point operations are image alterations that affect all pixels equally.  Other operations, like blurring for example, each result pixel depends on adjacent pixels.

This demonstrates changing contrast, value, saturation, hue, color inversion, and threshold point operations.  Note that there is a bug with increasing value and increasing saturation which I never got around to fixing.

<script type="text/javascript" src="/static/js/005/jquery.min.js"></script> 
<script type="text/javascript" src="/static/js/005/jsimage.js"></script> 
<script type="text/javascript" src="/static/js/005/colorspace.js"></script> 

<script type="text/javascript"> 
           
    var IJS_PointOps; // make IJS_PointOps public so I can play with it in firebug more easily
    $(document).ready( function() {

        IJS_PointOps = new JSImage( "IJS_PointOps", "/static/images/005/bee.jpg" );
    });

</script> 


<canvas id="IJS_PointOps">your browser does not support canvas</canvas> 

<style type="text/css">
#canvas-point-ops-tools-table input {
    width: 20px;
    height: 24px;
}
</style>
 
<table cellpadding="4" cellspacing="0" id="canvas-point-ops-tools-table"> 
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
        <input type="image" src="/static/images/005/arrow_up.png" onmousedown="IJS_PointOps.value( IJS_PointOps.canvas, 10 )" /> 
        <input type="image" src="/static/images/005/arrow_down.png" onmousedown="IJS_PointOps.value( IJS_PointOps.canvas, -10 )" /> 
    </td> 
    <td> 
        <input type="image" src="/static/images/005/arrow_up.png" onmousedown="IJS_PointOps.contrast( IJS_PointOps.canvas, 1.1)" /> 
        <input type="image" src="/static/images/005/arrow_down.png" onmousedown="IJS_PointOps.contrast( IJS_PointOps.canvas, 0.9)" /> 
    </td> 
    <td> 
        <input type="image" src="/static/images/005/arrow_up.png" onmousedown="IJS_PointOps.saturation( IJS_PointOps.canvas, 25 )" /> 
        <input type="image" src="/static/images/005/arrow_down.png" onmousedown="IJS_PointOps.saturation( IJS_PointOps.canvas, -25 )" /> 
    </td> 
    <td> 
        <input type="image" src="/static/images/005/arrow_up.png" onmousedown="IJS_PointOps.hue( IJS_PointOps.canvas, 20)" /> 
        <input type="image" src="/static/images/005/arrow_down.png" onmousedown="IJS_PointOps.hue( IJS_PointOps.canvas, -20)" /> 
    </td> 
    <td> 
        <button type="button" onmousedown="IJS_PointOps.invert()">invert</button> 
    </td> 
    <td> 
        <button type="button" onmousedown="IJS_PointOps.threshold( IJS_PointOps.canvas, document.getElementById('t').value )">threshold</button> 
        <br /> 
        <input type="text" value="127" maxlength="3" size="3" id="t" /> 
    </td> 
</tr> 

</table> 
