Title: ColorPal CLI!
Date: 2013-11-07
Tags: html5, javascript, color, colorpal
Summary: Tired of creating color palettes with ColorPal's simple, intuitive drag-and-drop interface?  Me too!  Want to jam with the console cowboys in cyber-space?  Now you can.  Now *we* can.  ![ColorPal CLI logo](/static/images/023/colorpal_cli_logo.png "ColorPal CLI logo")

Tired of creating color palettes with ColorPal's simple, intuitive
drag-and-drop interface?  Me too!  Want to jam with the console cowboys in
cyber-space?  Now you can.  Now *we* can.

![ColorPal CLI logo]({filename}/static/images/023/colorpal_cli_logo.png "ColorPal CLI logo")

## Demo!

    $ node cpal.js -f hex -s 8 MyImage.png

    #07070b
    #bac0c4
    #d1bd66
    #7e8899
    #696964
    #c4b441
    #65683e
    #394434

-------------------------------------------------------------------------------

## Get it!

    npm install -g canvas requirejs # install dependencies
    git clone git@github.com:mwcz/colorpal-cli.git
    cd colorpal-cli

-------------------------------------------------------------------------------

## Use it!

Visit the [projcet page][1] for the full documentation, or simply run the
command without any arguments to see the help text.

    Generate a color palette from an image! :)
    USAGE: node cpal.js IMAGE

    Options:
      -s, --size     Generate a fixed size palette; you specify the number of colors you want.

      -d, --dynamic  Generate a palette, sized dynamically based on the color diversity of the image; you can optionally specify a number from 0.0 to 1.0, where larger numbers increase the number of colors.

      -f, --format   Specify the output format.  Available formats are: scss, sass, json, less, rgb, hex

The code is [available on GitHub][2] and I welcome any feedback, bug reports,
pull requests, etc.

[1]: /projects/colorpal-cli "ColorPal CLI project page"
[2]: https://github.com/mwcz/colorpal-cli "ColorPal CLI code repository"
