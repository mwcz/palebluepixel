<% import datetime %>
<footer class="row">
		<%doc>
    <div class="span8">
      <p>
        <a href="${bf.util.site_path_helper(bf.config.blog.path,'feed','index.xml')}">RSS</a>
        % if bf.config.blog.disqus.enabled:
        <a href="http://${bf.config.blog.disqus.name}.disqus.com/latest.rss">Comments RSS Feed</a>.
        % endif
      </p>
    </div>
    <div class="span4" id="credits">
      <p>
        Copyright ${datetime.datetime.now().year}
        ${bf.config.site.author}
      </p>
    </div>
		</%doc>

  <div class="span3">
      <h4>Latest posts</h4> 
      <ul>
      % for post in bf.config.blog.iter_posts_published(5):
          <li><a href="${post.path}">${post.title}</a></li>
      % endfor
      </ul>
  </div>

  <div class="span3">
      <a href="https://www.github.com/mwcz">
      <img class="account_logo"
            src="/img/github_logo.png"
            alt="My GitHub profile" /> 
      </a>
  </div>

  <div class="span3">
      <a href="http://stackoverflow.com/users/215148/mwcz">
      <img class="account_logo" 
            src="/img/stackoverflow_logo.png"
            alt="My StackOverflow profile" /> 
      </a>
  </div>

  <div class="span3">
      <a href="https://twitter.com/#!/mwcz">
      <img class="account_logo"
           src="/img/twitter_logo.png" 
           alt="My Twitter account" /> 
      </a>
  </div>


  <%doc>
  <section>
    <h4 class="post_header_gradient">Me on twitter</h4>
    <div id="on_twitter">
      <div id="tweets"></div>
      <a href="http://search.twitter.com/search?q=mwcz" style="float: right">See more tweets</a>
    </div>
  </section>
  </%doc>
</footer>

