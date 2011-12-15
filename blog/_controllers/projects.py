# A simple Blogofile project listing for mwcz.org

import os
from blogofile.cache import bf

config = {
    "name": "projects",
    "description": "plugin to show off my awesome projects :|",
    "author": "mwc@clayto.org", }

class Project:
    "Represents one of my awesome projects. :|"

    def __init__( self, _name, _path, _icon, _desc ):
        self.name = _name
        self.path = _path
        self.icon = _icon
        self.desc = _desc


bf.projects = [
    Project( _name = "ColorPal",
             _path = "/category/colorpal",
             _icon = "/img/projects/icon_colorpal.png",
             _desc = "Automated color palette generation in HTML5" ),

    Project( _name = "mwcz.org",
             _path = "/category/mwcz.org",
             _icon = "/img/projects/icon_mwcz.png",
             _desc = "This blog :|" ),

    Project( _name = "median-cut.js",
             _path = "#",
             _icon = "/img/projects/icon_mediancut.png",
             _desc = "The median cut algorithm implemented in JavaScript.  Link coming soon." ),

    Project( _name = "AEJS",
             _path = "http://aejs.blogspot.com/",
             _icon = "/img/projects/icon_aejs.png",
             _desc = "A very-much-still-in-development Amiga 500 emulator in HTML5" ),

    Project( _name = "clayto.com",
             _path = "http://clayto.com/",
             _icon = "/img/projects/icon_clayto.png",
             _desc = "My custom photography website" ),

    Project( _name = "Bouncey",
             _path = "/category/bouncey",
             _icon = "/img/projects/icon_bouncey.png",
             _desc = "A buggy, just-for-fun JavaScript physics simulator." ),
    
    Project( _name = "JSImage",
             _path = "/category/jsimage",
             _icon = "/img/projects/icon_jsimage.png",
             _desc = "A JavaScript library for basic image operations" ),
]


