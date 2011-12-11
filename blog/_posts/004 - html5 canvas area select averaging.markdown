---
categories: html5, canvas, color, jsimage, colorpal
date: 2011/11/16 18:25:00
title: HTML5 canvas area selection averaging
---

This is a demo from late 2009.  It's an extension of the single-pixel [eyedropper](/blog/2011/11/16/html5-canvas-eyedropper/) I wrote previously.

It's powered by an early version of an old JS toolkit I wrote called JSImage.  The latest version is available at my [JSImage github repo](https://github.com/mwcz/jsimage).  Don't be fooled by the 2011 commits, those are just artifacts from svn-&gt;git migration.  No guarantees that the histo's are actually correct. :)

I used an old version of a rectangular selection tool called marquee.  I believe it's still located [here](http://marqueetool.net/) but I can't be totally sure that's the same project.

Click, drag, and taste the magic. :|

<link rel="stylesheet" type="text/css" href="/css/004/marker.css" /> 
<script type="text/javascript" src="/js/004/marquee/prototype_reduced.js"></script> 
<script type="text/javascript" src="/js/004/marquee/rectmarquee.js"></script> 
<script type="text/javascript" src="/js/004/JSImage.js"></script> 
 
 
<script type="text/javascript"> 
        
window.onload = function() {
 
    img0 = new JSImage( "c0", "/img/004/kazoo.png" );
    setTimeout("img0.draggable();",100); // enable the selection
 
}
 
var img0; // make img0 public so I can play with it in firebug more easily
 
</script> 
 
<canvas id="c0"> 
    Your browser does not support the <canvas> element. Lame.
</canvas>  
