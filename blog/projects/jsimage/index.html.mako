<%inherit file="_templates/site.mako" />
<article class="page_box">
<%self:filter chain="markdown">

JSImage
=======

% for post in bf.config.blog.posts:
    ${post.title}
    <% print(dir(post)) %>
% endfor

</%self:filter>
</article>
