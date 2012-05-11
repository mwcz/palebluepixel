<ul class="nav nav-list"> 
  <li class="nav-header">Latest posts</li> 
 % for post in bf.config.blog.iter_posts_published(5):
  <li><a href="${post.path}">${post.title}</a></li>
 % endfor

  <li class="nav-header">Find me on...</li>
  <li> 
      <a href="https://www.github.com/mwcz">
      <img class="account_logo"
            src="/img/github_logo.png"
            alt="My GitHub profile" /> 
      </a>
  </li>

  <li> 
      <a href="http://stackoverflow.com/users/215148/mwcz">
      <img class="account_logo" 
            src="/img/stackoverflow_logo.png"
            alt="My StackOverflow profile" /> 
      </a>
  </li>

  <li> 

      <a href="https://twitter.com/#!/mwcz">
      <img class="account_logo"
           src="/img/twitter_logo.png" 
           alt="My Twitter account" /> 
      </a>
  </li>
</ul> 


  <%doc>
  <section>
    <h1 class="post_header_gradient">From Twitter "example"</h1>
    <div id="on_twitter">
      <div id="tweets"></div>
      <a href="http://search.twitter.com/search?q=example" style="float: right">See more tweets</a>
    </div>
  </section>
  </%doc>
