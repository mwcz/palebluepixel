Title: HTML5 canvas RGB histogram
Date: 2011-11-16 17:25:00
Tags: html5, canvas, color, jsimage
Mwc: 3

This is yet another demo from around 2009.  It's simple enough.  Click a
button, draw an unbinned RGB histogram of the source image.

It's powered by an early version of an old JS toolkit I wrote called JSImage.
The latest version is available at my [JSImage github
repo](https://github.com/mwcz/jsimage).  Don't be fooled by the 2011 commits,
those are just artifacts from svn-&gt;git migration.  No guarantees that the
histo's are actually correct. :)

<div class="panel panel-default">
    <div class="panel-heading">
        <b>Original image</b>
    </div>
    <div class="panel-body">
        <canvas id="c0">
            Your browser does not support the &lt;canvas&gt; element. Lame.
        </canvas>
    </div>
</div>

<input type="button" onclick="draw_histo()" value="Draw histograms" />

<div class="row">
    <div class="col-xs-12 col-sm-4">
    <div class="panel panel-default">
        <div class="panel-heading">
            <b>Red</b>
        </div>
        <div class="panel-body">
            <canvas class="img-responsive" id="cr">
                Your browser does not support the &lt;canvas&gt; element. Lame.
            </canvas>
        </div>
    </div>
    </div>
    <div class="col-xs-12 col-sm-4">
        <div class="panel panel-default">
            <div class="panel-heading">
                <b>Green</b>
            </div>
            <div class="panel-body">
                <canvas class="img-responsive" id="cg">
                    Your browser does not support the &lt;canvas&gt; element. Lame.
                </canvas>
            </div>
        </div>
    </div>
    <div class="col-xs-12 col-sm-4">
        <div class="panel panel-default">
            <div class="panel-heading">
                <b>Blue</b>
            </div>
            <div class="panel-body">
                <canvas class="img-responsive" id="cb">
                    Your browser does not support the &lt;canvas&gt; element. Lame.
                </canvas>
            </div>
        </div>
    </div>
</div>

<p class="alert alert-info">I'm pretty sure the results are wrong, but here, years later, I can't be bothered to fix it. ;)</p>

<script type="text/javascript" src="/static/js/003/JSImage.js"></script>
<script type="text/javascript">

var draw_histo;
$(function () {

    var images0 = new JSImage( "c0", "/static/images/003/kazoo.png" );
    var imagesr = new JSImage( "cr", "/static/images/003/kazoo.png" );
    var imagesg = new JSImage( "cg", "/static/images/003/kazoo.png" );
    var imagesb = new JSImage( "cb", "/static/images/003/kazoo.png" );

    draw_histo = function () {

        /**
         * Color histo canvases the color of their histo
         */
        images0.histo( imagesr.canvas, 'r', 'rgba(255,0,0,0.9)', 'rgba(0,0,0,0.8)' );
        images0.histo( imagesg.canvas, 'g', 'rgba(0,200,0,0.9)', 'rgba(0,0,0,0.8)' );
        images0.histo( imagesb.canvas, 'b', 'rgba(0,0,200,0.9)', 'rgba(0,0,0,0.8)' );

    };


});
</script>
