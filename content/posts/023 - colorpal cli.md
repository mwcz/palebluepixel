Title: ColorPal CLI!
Date: 2013-11-07
Tags: html5, javascript, color, colorpal
Summary: Tired of creating color palettes with ColorPal's simple, intuitive drag-and-drop interface?  Me too!  Want to jam with the console cowboys in cyber-space?  Now you can.  Now *we* can.  ![ColorPal CLI demo recording](/static/images/023/cp.node.gif "ColorPal CLI demo recording")

Tired of creating color palettes with ColorPal's simple, intuitive
drag-and-drop interface?  Me too!  Want to jam with the console cowboys in
cyber-space?  Now you can.  Now *we* can.

![ColorPal CLI demo recording]({filename}/static/images/023/cp.node.gif "ColorPal CLI demo recording")

There now exists a command-line ColorPal utility.

    # Create a palette of 8 colors from image.png
    node cp.js image.png fixed 8

    # Create a palette with a dynamic number of colors.  ColorPal intelligently
    # chooses how many colors to include based on the color diversity of the
    # image.
    node cp.js image.png dynamic

If dynamic mode doesn't include enough colors, you can pass in a number from
0.0 to 1.0, where a greater number means "include more colors".

    # Include more colors
    node cp.js image.png dynamic 0.2

    # Even more colors
    node cp.js image.png dynamic 0.5

    # LOTS of colors
    node cp.js image.png dynamic 1.0

Currently only `png` images are supported, because I'm using
[pngjs](https://github.com/niegowski/node-pngjs/) to decode the images, which
(shockingly) only supports pngs.  I'd like to support other formats, but this
is a simple prototype release, and those formats can be supported once I find a
Node library that can decode them.
