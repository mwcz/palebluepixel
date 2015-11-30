Title: JSImage
Slug: projects/jsimage
Tags: html5, javascript, color
Status: hidden

JSImage was a basic, buggy, just-for-fun image processing library that I wrote
in 2008/2009 when I first started seriously studying JavaScript.

A stumbled across a [book][1] in my university library, and started
implementing the algorithms on the newly available HTML5 canvas element.

I've made [several posts][2] about JSImage which contain live demos.

I don't recommend anyone use JSImage, but here's the code if you fancy a skim:

<div id="cp-repo"></div>

<script src="/static/js/repo.js"></script>
<script>
    $(function() {
        $('#cp-repo').repo({
            user: 'mwcz',
            name: 'JSImage'
        });
    });
</script>

I think I put more work into code formatting than correct output. ;)

<!-- Hiding this here so jquery.lightbox's css doesn't get purifycss'd away (the elements are added clientside)  -->
<div id="lightbox-6722" class="lightbox bodyGlobalLightbox" style="display: none"><a href="#" class="lightbox__close lightbox__button"></a><a href="#" class="lightbox__nav lightbox__nav--prev lightbox__button"></a><a href="#" class="lightbox__nav lightbox__nav--next lightbox__button"></a><div href="#" class="lightbox__caption"><p></p></div><span class="lightbox__loading"></span></div>

[1]: http://imagingbook.com/books/englisch-edition-3-vol-softcover/ "Principles of Digital Image Processing"
[2]: /tag/jsimage "Posts about JSImage"
