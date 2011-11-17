---
categories: html5, canvas, color
date: 2011/11/16 15:25:00
title: HTML5 Canvas eyedropper
---

<style type="text/css"> 
    #color { height: 80px; width: 80px; margin: 20px; display: block; border: 1px solid black; }
    canvas { margin: 0 auto; }
</style> 

<script type="text/javascript"> 
 
var c;
var cnvs;
 
window.onload = function() {
 
    cnvs = document.getElementById("c");
    
    if( cnvs.getContext) { // Check for canvas support
    // DRAW FUN STUFF!  
 
        c = cnvs.getContext('2d');
        var color = document.getElementById("color");
        var colorcode = document.getElementById("colorcode");
 
        var img = new Image();
 
        img.onload = function() {
            cnvs.width = img.width;cnvs.height = img.height; // resize to fit image
            c.drawImage( img, 0, 0 );
        }
        img.src = "/img/001/kazoo.png";
 
        pixel = function(e) {

            // find the element's position
            var x = 0;
            var y = 0;
            var o = cnvs;
            do {
                x += o.offsetLeft;
                y += o.offsetTop;
            } while (o = o.offsetParent);

            x = e.pageX - x;
            y = e.pageY - y;
            var imgdata = c.getImageData( x, y, 1, 1 );
            var new_color = [ imgdata.data[0], imgdata.data[1], imgdata.data[2] ];
            color.style.background = "rgb("+new_color+")";
            colorcode.innerHTML = "rgb("+new_color+")";
        }
 
        cnvs.onmousedown = function(e) {
            cnvs.onmousemove = pixel; // fire pixel() while user is dragging
            cnvs.onclick = pixel; // only so it will still fire if user doesn't drag at all
        }
 
        cnvs.onmouseup = function() {
            cnvs.onmousemove = null;
        }
 
    }
 
}
 
</script> 

This is an old demo I made of an [HTML5 canvas](http://en.wikipedia.org/wiki/Canvas_element) eyedropper.  Circa 2009, I believe.  Just click and drag on the image to see it in action.

<span id="color"></span>
<span id="colorcode"></span>

<canvas id="c">Sorry, in order to view this demo you need a Web browser that supports HTML5 canvas.</canvas>

It's a pretty simple script, and works by declaring this function which handles onclick and ondrag events from the canvas.  cnvs is the canvas element, and c is the canvas's 2D rendering context object.

$$code(lang=javascript)
pixel = function(e) {
    // calculate the x and y coordinates of the cursor
    var imgdata = c.getImageData( x, y, 1, 1 );
    var new_color = [ imgdata.data[0],
                      imgdata.data[1], 
                      imgdata.data[2] ];
    color.style.background = "rgb("+new_color+")";
}
$$/code

That's just a summary; the function actually does a little more than that.  Take a look at the source for this page if you're interested, and contact me if there are any questions.
