<%inherit file="_templates/site.mako" />
<article class="page_box">
<%self:filter chain="markdown">

JSImage
=======

% for post in bf.config.blog.posts:
        ${post.title}
% endfor


    <%doc>
    <% print(post.categories.__contains__( "colorpal" )) %>
    </%doc>
</%self:filter>
</article>
