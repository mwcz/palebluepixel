<%inherit file="_templates/site.mako" />
<article class="page_box">
<%self:filter chain="markdown">

JSImage
=======

% for post in bf.config.blog.posts:
        ${post.title}
% endfor

    <%doc>
    <% help(post.categories) %>
    <% print(post.categories) %>
    <% print(post.categories.__contains__( Category("general") )) %>
    </%doc>
</%self:filter>
</article>
