---
layout: post
title: HTML5 canvas RGB histogram
date: 2011-11-16 17:25:00
categories: html5 canvas color jsimage
---

This is yet another demo from around 2009.  It's simple enough.  Click a button, draw an unbinned RGB histogram of the source image.

It's powered by an early version of an old JS toolkit I wrote called JSImage.  The latest version is available at my [JSImage github repo](https://github.com/mwcz/jsimage).  Don't be fooled by the 2011 commits, those are just artifacts from svn-&gt;git migration.  No guarantees that the histo's are actually correct. :)

<script type="text/javascript" src="/static/js/003/JSImage.js"></script> 

<script type="text/javascript"> 
        
window.onload = function() {
 
    images0 = new JSImage( "c0", "/static/images/003/kazoo.png" );
    imagesr = new JSImage( "cr", "/static/images/003/kazoo.png" );
    imagesg = new JSImage( "cg", "/static/images/003/kazoo.png" );
    imagesb = new JSImage( "cb", "/static/images/003/kazoo.png" );
 
 
}
 
function draw() {
 
    /**
     * Color histo canvases the color of their histo
     */
    images0.histo( imagesr.canvas, 'r', 'rgba(255,0,0,0.9)', 'rgba(0,0,0,0.8)' )
    images0.histo( imagesg.canvas, 'g', 'rgba(0,200,0,0.9)', 'rgba(0,0,0,0.8)' )
    images0.histo( imagesb.canvas, 'b', 'rgba(0,0,200,0.9)', 'rgba(0,0,0,0.8)' )
 
}
 
var images0, imagesr, imagesg, imagesb; // make images0 public so I can play with it in firebug more easily
 
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

