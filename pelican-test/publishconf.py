#!/usr/bin/env python
# -*- coding: utf-8 -*- #

from os import environ

#######################################################################
#                            MISC SETTINGS                            #
#######################################################################

AUTHOR                = u'mwcz'
SITENAME              = u'mwcz.org - a blog'
TIMEZONE              = 'America/New_York'
DEFAULT_LANG          = u'en'
PDF_GENERATOR         = False
DEFAULT_PAGINATION    = 6
MARKUP                = ('md','mkd','markdown')
DISPLAY_PAGES_ON_MENU = True
# Theme settings
# bootlex
# chunk
# pelican-mockingbird
THEME                 = environ["HOME"] + "/workspace/pelican-themes/bootlex"

#######################################################################
#                            HOST SETTINGS                            #
#######################################################################

SITEURL     = 'http://zipt.org'
FEED_DOMAIN = 'http://zipt.org'


# Blogroll
#LINKS =  (('Pelican', 'http://docs.notmyidea.org/alexis/pelican/'),
          #('Python.org', 'http://python.org'),
          #('Jinja2', 'http://jinja.pocoo.org'),
          #('You can modify those links in your config file', '#'),)


# global metadata to all the contents
#DEFAULT_METADATA = (('yeah', 'it is'),)

# static paths will be copied under the same name
#STATIC_PATHS = ["pictures", ]

# A list of files to copy from the source to the destination
#FILES_TO_COPY = (('extra/robots.txt', 'robots.txt'),)


# custom pages generated with a jinja2 template
#TEMPLATE_PAGES = {'/projects': 'projects/index.html'}


#######################################################################
#                            PATH SETTINGS                            #
#######################################################################

# TODO the mwcz.org tag is actually slugified into "mwczorg" but the link still
# reads "mwcz.org" so it 404's
SLUG_SUBSTITUTIONS    = (('.',''))

FEED_ALL_RSS          = 'feeds/all.rss.xml'
CATEGORY_FEED_RSS     = 'feeds/%s.rss.xml'

PAGE_DIR              = 'pages'

ARTICLE_URL           = '{date:%Y}/{date:%m}/{date:%d}/{slug}/'
ARTICLE_SAVE_AS       = '{date:%Y}/{date:%m}/{date:%d}/{slug}/index.html'

PAGE_URL              = '{slug}/index.html'
PAGE_SAVE_AS          = '{slug}/index.html'

# Feed (syndication) settings
FEED_ATOM             = 'feeds/all.atom.xml'
FEED_RSS              = 'feeds/all.rss.xml'

# tag paths
TAG_URL               = 'tag/{slug}/index.html'
TAG_SAVE_AS           = 'tag/{slug}/index.html'
TAGS_URL              = 'tags/index.html'
TAGS_SAVE_AS          = 'tags/index.html'

# Category paths
CATEGORY_URL          = 'category/{slug}/index.html'
CATEGORY_SAVE_AS      = 'category/{slug}/index.html'

# Disable author page since I'm the only author
AUTHOR_SAVE_AS        = False
AUTHORS_SAVE_AS       = False

# Period archive URLS
YEAR_ARCHIVE_SAVE_AS  = '{date:%Y}/index.html'
MONTH_ARCHIVE_SAVE_AS = '{date:%Y}/{date:%m}/index.html'
DAY_ARCHIVE_SAVE_AS   = '{date:%Y}/{date:%m}/{date:%d}/index.html'

# theme tuxlite_tbs-specific settings
ARCHIVES_URL          = 'archives/'
ARCHIVES_SAVE_AS      = 'archives/index.html'

#######################################################################
#                       SOCIAL NETWORK SETTINGS                       #
#######################################################################

GITHUB_URL      = 'https://github.com/mwcz'
DISQUS_SITENAME = 'mwcz'
SOCIAL          = (('GitHub',  'https://github.com/mwcz'),
                   ('Twitter', 'https://twitter.com/mwcz'),)

