<aside>
  <section>
    <h1 class="post_header_gradient theme_font">Latest Posts</h1>
    <ul>
      % for post in bf.config.blog.iter_posts_published(5):
      <li><a href="${post.path}">${post.title}</a></li>
      % endfor
    </ul>
  </section>

  <section>
    <h1>Find me on...</h1>
    <ul>
        <li> <a href="https://www.github.com/mwcz">GitHub</a> </li>
        <li> <a href="http://stackoverflow.com/users/215148/mwcz">StackOverflow</a> </li>
        <li> <a href="http://clayto.com/">My Django-based photography site</a> </li>
    </ul>
  </section>

  <%doc>
  <section>
    <h1 class="post_header_gradient theme_font">From Twitter "example"</h1>
    <div id="on_twitter">
      <div id="tweets"></div>
      <a href="http://search.twitter.com/search?q=example" style="float: right">See more tweets</a>
    </div>
  </section>
  </%doc>

</aside>
