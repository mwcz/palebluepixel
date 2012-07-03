<%inherit file="bf_base_template" />
% for post in posts:
  <%include file="post.mako" args="post=post" />
% endfor
% if prev_link or next_link:
    <ul class="pager">
    % if prev_link:
        <li class="next">
            <a href="${prev_link}">Newer &rarr;</a>
        </li>
    % endif
    % if next_link:
        <li class="previous">
            <a href="${next_link}">&larr; Older</a>
        </li>
    % endif
    </ul>
% endif
