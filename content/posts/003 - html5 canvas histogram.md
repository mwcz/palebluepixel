Title: HTML5 canvas RGB histogram
Date: 2011-11-16 17:25:00
Tags: html5, canvas, color, jsimage

This is yet another demo from around 2009.  It's simple enough.  Click a button, draw an unbinned RGB histogram of the source image.

It's powered by an early version of an old JS toolkit I wrote called JSImage.  The latest version is available at my [JSImage github repo](https://github.com/mwcz/jsimage).  Don't be fooled by the 2011 commits, those are just artifacts from svn-&gt;git migration.  No guarantees that the histo's are actually correct. :)

<script type="text/javascript" src="/js/003/JSImage.js"></script> 

<script type="text/javascript"> 
        
window.onload = function() {
 
    static/images0 = new JSImage( "c0", "/static/images/003/kazoo.png" );
    static/imagesr = new JSImage( "cr", "/static/images/003/kazoo.png" );
    static/imagesg = new JSImage( "cg", "/static/images/003/kazoo.png" );
    static/imagesb = new JSImage( "cb", "/static/images/003/kazoo.png" );
 
 
}
 
function draw() {
 
    /**
     * Color histo canvases the color of their histo
     */
    static/images0.histo( static/imagesr.canvas, 'r', 'rgba(255,0,0,0.9)', 'rgba(0,0,0,0.8)' )
    static/images0.histo( static/imagesg.canvas, 'g', 'rgba(0,200,0,0.9)', 'rgba(0,0,0,0.8)' )
    static/images0.histo( static/imagesb.canvas, 'b', 'rgba(0,0,200,0.9)', 'rgba(0,0,0,0.8)' )
 
}
 
var static/images0, static/imagesr, static/imagesg, static/imagesb; // make static/images0 public so I can play with it in firebug more easily
 
</script> 

<canvas id="c0"> 
    Your browser does not support the <canvas> element. Lame.
</canvas> 

<button type="button" onclick="draw()">draw histograms</button> 

Red:

<canvas id="cr"> 
    Your browser does not support the <canvas> element. Lame.
</canvas> 

Green:

<canvas id="cg"> 
    Your browser does not support the <canvas> element. Lame.
</canvas> 

Blue:

<canvas id="cb"> 
    Your browser does not support the <canvas> element. Lame.
</canvas> 

