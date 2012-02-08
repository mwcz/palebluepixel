<% import datetime %>
<footer id="footer">
    <div class="grid_8">
      <p>
        <a href="${bf.util.site_path_helper(bf.config.blog.path,'feed','index.xml')}">RSS</a>
		<%doc>
        % if bf.config.blog.disqus.enabled:
        <a href="http://${bf.config.blog.disqus.name}.disqus.com/latest.rss">Comments RSS Feed</a>.
        % endif
		</%doc>
      </p>
    </div>
    <div class="grid_4" id="credits">
      <p>
        Copyright ${datetime.datetime.now().year}
        ${bf.config.site.author}
      </p>
    </div>

</footer>

<%include file="tracker.mako"/>
