<%inherit file="bf_base_template" />

<!-- description -->

<div class="row">
% for post in posts:
  <%include file="post_excerpt.mako" args="post=post" />
% endfor

    <div class="span4">
      <div class="well">
        <h1>Latest photo</h1>
        <a href="http://clayto.com/">
            <img src="http://clayto.com/site_media/photos/latest_thumbnail" />
        </a>
        <p>(clayto.com)</p>
      </div>
    </div>

</div> <!-- /.row -->

<div class="row">
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
</div> <!-- /.row -->
