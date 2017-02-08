Title: RequireJS Dynamic Dependencies
Date: 2014-07-23
Tags: programming, javascript, requirejs, amd, web
Mwc: 32
Status: draft

Dynamic dependency loading:

Typically, the function passed into require will have one parameter for each
dependency.

What if you wanted to load dependencies that are defined at run-time?

Use case: you have several modules that provide the same API.

