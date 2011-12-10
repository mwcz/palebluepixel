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
    Project( "ColorPal",
             "/projects/colorpal/",
             "/img/projects/icon_colorpal.png",
             "Automated color palette generation in HTML5" ),
    Project( "mwcz.org",
             "/projects/mwcz.org/",
             "/img/projects/icon_mwcz.png",
             "This blog :|" ),

    Project( "median-cut.js",
             "/projects/median-cut.js/",
             "/img/projects/icon_mediancut.png",
             "The median cut algorithm implemented in JavaScript" ),

    Project( "AEJS",
             "/projects/aejs/",
             "/img/projects/icon_aejs.png",
             "An Amiga 500 emulator in HTML5" ),

    Project( "clayto.com",
             "/projects/clayto.com/",
             "/img/projects/icon_clayto.png",
             "My custom photography website" ),

    Project( "Bouncey",
             "/projects/bouncey/",
             "/img/projects/icon_bouncey.png",
             "A buggy, just-for-fun JavaScript physics simulator." ),
    
    Project( "JSImage",
             "/projects/jsimage/",
             "/img/projects/icon_jsimage.png",
             "A JavaScript library for basic image operations" ),
]


