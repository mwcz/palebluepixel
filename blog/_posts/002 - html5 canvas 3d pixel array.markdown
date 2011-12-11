---
categories: html5, canvas, color, colorpal
date: 2011/11/16 16:25:00
title: HTML5 canvas 3D pixel array
---

This is another demo from 2009-ish.  When I started experimenting with canvas, I felt uncomfortable with the 1-dimensionality of [CanvasPixelArray](https://developer.mozilla.org/en/DOM/CanvasPixelArray).  I wrote this script to convert it into a more logical format: X by Y by RGBA.  Let me rephrase that.  By "more logical", I mean "more logical, *to me*, *at the time*).  1D is fine, and I can't think of any use for this script.  But, nonetheless, here it is, including the original description.


<script type="text/javascript"> 
 
var c;
var cnvs;

window.onload = draw;
 
function draw() {
 
    cnvs = document.getElementById("c");
    tmpl = document.getElementById("t");
    
    if( cnvs.getContext) { // Check for canvas support
 
        c = cnvs.getContext('2d');
        t = tmpl.getContext('2d');
        var color = document.getElementById("color");
 
        var img = new Image();
 
        img.onload = function() {
            cnvs.width = img.width;
            cnvs.height = img.height; // resize to fit image
            tmpl.width = img.width;
            tmpl.height = img.height; // resize to fit image
            c.drawImage( img, 0, 0 );
        }
        img.src = "/img/002/kazoo.png";
 
        getpixelarray = function() {
            var pixarray = new Array();
            var imgdata = c.getImageData( 0, 0, cnvs.width, cnvs.height ).data;
 
            /**
             * getImageData() returns a one-dimensional array where each element represents,
             * one subpixel.  So a full set of pixels looks like this:
             *
             *      (R, G, B, A, R, G, B, A, R, G, B, A, ...)
             *
             * Ugly, right?  Yeah.  So I'm translating them into a 2D array where the origin
             * (sadly) is at the top left.
             *
             * When doing the translation, I'm also starting at the bottom right, so there
             * only has to be ONE array enlarge operation each for the X and Y arrays.
             */
 
            // build empty pix array.  we'll fill it later
            //console.time("build empty array");
            for( var x = cnvs.width-1; x >= 0; x-- ) {
 
                pixarray[x] = new Array(); // insert new vertical array
 
                for( var y = cnvs.height-1; y >= 0; y-- ) {
 
                    pixarray[x][y] = new Array(0,0,0,0);
 
                }
 
            }
 
 
            /** 
             * Now we fill up the pix array with real values.
             * We don't REALLY need the alpha channel, but I'm including it
             * just in case a use arises for it in the future.  Likely.
             */
 
            for( var i = 0; i < imgdata.length-3; i+=4 ) {
                var x = parseInt( parseInt(i/4) % ( cnvs.width ) );
                var y = parseInt( parseInt(i/4) / ( cnvs.width ) );
 
                pixarray[x][y][0] = imgdata[i];
                pixarray[x][y][1] = imgdata[i+1];
                pixarray[x][y][2] = imgdata[i+2];
                pixarray[x][y][3] = imgdata[i+3];
 
            }
 
 
            for( var y = 0; y < cnvs.height; y++ ) { // loop over y
                for( var x = 0; x < cnvs.width; x++ ) { // loop over x
                    t.fillStyle = "rgba(" + pixarray[x][y][0] + "," + pixarray[x][y][1] + "," + pixarray[x][y][2] + "," + pixarray[x][y][3] + ")";
                    t.fillRect(x, y, 1, 1);
                }
            }
 
            return pixarray;
        }
 
 
    }
 
}
 
</script> 


canvas pixarray
===============

After loading an image file into a &lt;canvas&gt; element, you can retrieve its pixels with getImageData().  The problem is that the array of pixels is one-dimensional.  The array would look something like this for a set of N pixels P<sub>i</sub> where each pixel has bands RGBA with values 0..255:

( P<sub>0R</sub>, P<sub>0G</sub>, P<sub>0B</sub>, P<sub>0A</sub>, P<sub>1R</sub>, P<sub>1G</sub>, P<sub>1B</sub>, P<sub>1A</sub>, ... , P<sub>(N-1)R</sub>, P<sub>(N-1)G</sub>, P<sub>(N-1)B</sub>, P<sub>(N-1)A</sub> )
 
That's really tough to work with, so this script converts that to a more logical 3D array (X by Y by RGBA)
 
<input type="button" value="1D -> 3D pixel array" onclick="getpixelarray();" /> 
 
 
 
 
 
This canvas drawn from an image file:

<canvas id="c" width="650" height="250"> 
    Your browser does not support the &lt;canvas&gt; element.
    Lame.
</canvas> 
 
This canvas drawn from the 3D image array:

<canvas id="t" width="650" height="250"> 
    Your browser does not support the &lt;canvas&gt; element.
    Lame.
</canvas> 
