#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

from os import environ

#######################################################################
#                            MISC SETTINGS                            #
#######################################################################

DEBUG                 = True
AUTHOR                = u'mwcz'
SITENAME              = u'Pale Blue Pixel'
TIMEZONE              = 'America/New_York'
DEFAULT_LANG          = u'en'
PDF_GENERATOR         = False
DEFAULT_PAGINATION    = 6
OUTPUT_SOURCES        = True
DISPLAY_PAGES_ON_MENU = True
THEME                 = environ['HOME'] + '/projects/pbpt'

DISPLAY_CATEGORIES_ON_MENU = True

TEMPLATE_PAGES = {
        'pages/projects/index.html' : 'projects/index.html',
        'main.html'                 : 'index.html',
        '404.html'                  : '404.html'
        }
EXTRA_PATH_METADATA = {
        # Give the projects page a title to work around <title> being used for
        # HTML pages
        'pages/projects/index.html': {'title': 'Projects'},
        }

USE_FOLDER_AS_CATEGORY = False
DEFAULT_CATEGORY = 'Posts'

DATE_FORMATS = {
        'en': '%Y-%m-%d',
        }

######################
#  CACHING SETTINGS  #
######################

# CACHE_CONTENT = True
# LOAD_CONTENT_CACHE = True

#######################################
#  pelican-bootstrap3 theme settings  #
#######################################

# display active github repos
GITHUB_USER = 'mwcz'
GITHUB_REPO_COUNT = 5
GITHUB_SKIP_FORK = True

# use a bootstrap theme from http://bootswatch.com/
BOOTSTRAP_THEME = 'flatly'

#######################################################################
#                           PLUGIN SETTINGS                           #
#######################################################################

PLUGIN_PATHS = [environ['HOME'] + '/projects/pelican-plugins']
PLUGINS = [
    'neighbors',
    'assets',
    'series',
    'gallery',
    'jinja2content',
    'representative_image',
    'thumbnailer',
]

# assets plugin settings

ASSET_BUNDLES = [
    ('pbp-css',
     [
         'static/less/font-imports.less',
         'static/less/bootswatch/flatly/bootstrap.less',
         'static/less/styles.less',
         'static/css/jquery.lightbox.css',
         'static/lib/prism/prism.css',
     ],
     {
         'filters': 'less',
         'output': 'css/styles.min.css',
     }
    ),
]

ASSET_SOURCE_PATHS = [
    environ['HOME'] + '/projects/pbpt',
]

# related posts settings

RELATED_POSTS_MAX = 4


#######################################################################
#                            HOST SETTINGS                            #
#######################################################################

SITEURL     = 'http://localhost:8000'
FEED_DOMAIN = 'http://localhost:8000'

# Blogroll
#LINKS =  (('Pelican', 'http://docs.notmyidea.org/alexis/pelican/'),
          #('Python.org', 'http://python.org'),
          #('Jinja2', 'http://jinja.pocoo.org'),
          #('You can modify those links in your config file', '#'),)


# global metadata to all the contents
#DEFAULT_METADATA = (('yeah', 'it is'),)

# static paths will be copied under the same name
STATIC_PATHS = ['static', 'pages', 'projects', 'demos', 'posts']

STATIC_SAVE_AS = '{path}'

# A list of files to copy from the source to the destination
#FILES_TO_COPY = (('extra/robots.txt', 'robots.txt'),)


#######################################################################
#                            PATH SETTINGS                            #
#######################################################################

PATH                  = 'content'
ARTICLE_PATHS         = ['posts']

# thumbnailer settings
IMAGE_PATH = 'images'
THUMBNAIL_DIR = 'static/images/gallery'
THUMBNAIL_SIZES = {
    '1200x': '1200x?',
    '900x': '900x?',
    '400x': '400x?',
    '150x': '150x?'
}
THUMBNAIL_KEEP_NAME = True
THUMBNAIL_KEEP_TREE = True


# TODO the mwcz.org tag is actually slugified into "mwczorg" but the link still
# reads "mwcz.org" so it 404's
#SLUG_SUBSTITUTIONS    = (('.',''))

FEED_ALL_RSS          = 'feeds/all.rss.xml'
CATEGORY_FEED_RSS     = 'feeds/%s.rss.xml'

ARTICLE_URL           = '{date:%Y}/{date:%m}/{date:%d}/{slug}/'
ARTICLE_SAVE_AS       = '{date:%Y}/{date:%m}/{date:%d}/{slug}/index.html'

PAGE_PATHS            = ['pages']
PAGE_URL              = '{slug}/'
PAGE_SAVE_AS          = '{slug}/index.html'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# tag paths
TAG_URL               = 'tag/{slug}/'
TAG_SAVE_AS           = 'tag/{slug}/index.html'
TAGS_URL              = 'tags/'
TAGS_SAVE_AS          = 'tags/index.html'

# Categories paths
CATEGORIES_URL          = 'categories/'
CATEGORIES_SAVE_AS      = 'categories/index.html'

# Category paths
CATEGORY_URL          = '{slug}/'
CATEGORY_SAVE_AS      = '{slug}/index.html'

# Disable author page since I'm the only author
AUTHOR_URL            = 'author/{slug}/'
AUTHOR_SAVE_AS        = 'author/{slug}/index.html'

# Disable author page since I'm the only author
AUTHORS_URL            = 'authors/{slug}/'
AUTHORS_SAVE_AS        = 'authors/{slug}/index.html'

# Period archive URLS
YEAR_ARCHIVE_SAVE_AS  = '{date:%Y}/index.html'
MONTH_ARCHIVE_SAVE_AS = '{date:%Y}/{date:%m}/index.html'
DAY_ARCHIVE_SAVE_AS   = '{date:%Y}/{date:%m}/{date:%d}/index.html'

# theme tuxlite_tbs-specific settings
ARCHIVES_URL          = 'archives/'
ARCHIVES_SAVE_AS      = 'archives/index.html'

# Pagination paths (and quantity)
PAGINATION_PATTERNS = (
    (1, '{base_name}/', '{base_name}/index.html'),
    (2, '{base_name}/{number}/', '{base_name}/{number}/index.html'),
)

SUMMARY_MAX_LENGTH = 20

#######################################################################
#                       SOCIAL NETWORK SETTINGS                       #
#######################################################################

GITHUB_URL      = 'https://github.com/mwcz'
DISQUS_SITENAME = False #'mwcz'
TWITTER_COMMENTS = False # not working so great anymore
DISCOURSE_COMMENTS = False
SOCIAL          = (('GitHub',  'https://github.com/mwcz'),
                   ('Twitter', 'https://twitter.com/mwcz'),)

USE_OPEN_GRAPH = True

#######################################################################
#                           JINJA2 SETTINGS                           #
#######################################################################

from functools import partial

JINJA_FILTERS = {
    'sort_by_article_count': partial(
        sorted,
        key=lambda tags: len(tags[1]),
        reverse=True)} # reversed for descending order


#######################################################################
#                        ANALYTICS SETTINGS                           #
#######################################################################

PIWIK_ANALYTICS = False
