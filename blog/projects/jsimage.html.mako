<%inherit file="_templates/site.mako" />
<article class="page_box">
<%self:filter chain="markdown">

Welcome to mwcz.org
====================

% for post in bf.config.blog.posts:
    ${post.title}
    <% print(dir(post)) %>
% endfor

</%self:filter>
</article>
