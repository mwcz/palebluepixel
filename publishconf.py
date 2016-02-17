#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

# This file is only used if you use `make publish` or
# explicitly specify it as your config file.

import os
import sys
sys.path.append(os.curdir)
from pelicanconf import *

DEBUG = True
SITEURL = 'http://palebluepixel.org'
RELATIVE_URLS = False

DELETE_OUTPUT_DIRECTORY = True

# only use the thumbnailer plugin for production builds because it's sloooooooow
PLUGINS.append('thumbnailer')

# Following items are often useful when publishing

#DISQUS_SITENAME = ""
#GOOGLE_ANALYTICS = ""

