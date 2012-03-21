<% import datetime %>
<footer id="footer" class="row">
    <div class="span8">
      <p>
        <a href="${bf.util.site_path_helper(bf.config.blog.path,'feed','index.xml')}">RSS</a>
		<%doc>
        % if bf.config.blog.disqus.enabled:
        <a href="http://${bf.config.blog.disqus.name}.disqus.com/latest.rss">Comments RSS Feed</a>.
        % endif
		</%doc>
      </p>
    </div>
    <div class="span4" id="credits">
      <p>
        Copyright ${datetime.datetime.now().year}
        ${bf.config.site.author}
      </p>
    </div>

</footer>

<%include file="tracker.mako"/>
