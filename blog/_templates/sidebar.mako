<aside>
  <section>
    <h1>Latest Posts</h1>
    <ul>
      % for post in bf.config.blog.iter_posts_published(5):
      <li><a href="${post.path}">${post.title}</a></li>
      % endfor
    </ul>
  </section>

  <section>
    <h1>Find me on...</h1>
    <ul>
        <li> <img class="account_logo" src="/img/github_logo.png" alt="My GitHub profile" /> 
             <a href="https://www.github.com/mwcz">GitHub</a> </li>
        <li> <img class="account_logo" src="/img/stackoverflow_logo.png" alt="My StackOverflow profile" /> 
             <a href="http://stackoverflow.com/users/215148/mwcz">StackOverflow</a> </li>
        <li> <img class="account_logo" src="/img/twitter_logo.png" alt="My Twitter account" /> 
             <a href="https://twitter.com/#!/mwcz">Twitter</a> </li>
    </ul>
  </section>

  <%doc>
  <section>
    <h1 class="post_header_gradient">From Twitter "example"</h1>
    <div id="on_twitter">
      <div id="tweets"></div>
      <a href="http://search.twitter.com/search?q=example" style="float: right">See more tweets</a>
    </div>
  </section>
  </%doc>

</aside>
