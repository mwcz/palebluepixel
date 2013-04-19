#!/usr/bin/env python
# -*- coding: utf-8 -*- #

AUTHOR   = u'mwcz'
SITENAME = u'Pelican Test Site'
SITEURL  = 'http://localhost'
TIMEZONE = 'America/New_York'

DEFAULT_LANG           = u'en'

GITHUB_URL             = 'https://github.com/mwcz'
DISQUS_SITENAME        = 'mwcz'
PDF_GENERATOR          = False
FEED_ALL_RSS           = 'feeds/all.rss.xml'
CATEGORY_FEED_RSS      = 'feeds/%s.rss.xml'

ARTICLE_URL     = '{date:%Y}/{date:%m}/{date:%d}/{slug}/'
ARTICLE_SAVE_AS = '{date:%Y}/{date:%m}/{date:%d}/{slug}/index.html'

# Blogroll
LINKS =  (('Pelican', 'http://docs.notmyidea.org/alexis/pelican/'),
          ('Python.org', 'http://python.org'),
          ('Jinja2', 'http://jinja.pocoo.org'),
          ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('GitHub', 'https://github.com/mwcz'),
          ('Twitter', 'https://twitter.com/mwcz'),)

DEFAULT_PAGINATION = 6
FEED_DOMAIN = 'http://localhost'

# global metadata to all the contents
#DEFAULT_METADATA = (('yeah', 'it is'),)

# static paths will be copied under the same name
#STATIC_PATHS = ["pictures", ]

# A list of files to copy from the source to the destination
#FILES_TO_COPY = (('extra/robots.txt', 'robots.txt'),)

# custom page generated with a jinja2 template
#TEMPLATE_PAGES = {'pages/jinja2_template.html': 'jinja2_template.html'}
