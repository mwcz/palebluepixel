<%inherit file="bf_base_template" />
% for post in posts:
  <%include file="post.mako" args="post=post" />
% endfor
% if prev_link or next_link:
    <div id="prev_next">
    % if prev_link:
        <a class="grid_3 prev_link" href="${prev_link}"><-- Previous Page</a>
    % endif
    % if next_link:
        <a class="grid_3 next_link" href="${next_link}">Next Page --></a>
    % endif
    </div>
% endif
