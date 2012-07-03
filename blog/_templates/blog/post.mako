<%page args="post"/>

<% 
   category_links = []
   for category in post.categories:
       if post.draft:
           #For drafts, we don't write to the category dirs, so just write the categories as text
           category_links.append(category.name)
       else:
           category_links.append("<a href='%s'>%s</a>" % (category.path, category.name))
%>

<article class="blog_post well">
    <header class="page-header">
      <a name="${post.slug}"></a>
      <h1>
        <a href="${post.permapath()}" rel="bookmark" title="Permanent Link to ${post.title}">
          ${post.title}
        </a>
      </h2>
      <small>
        ${post.date.year}
        ${post.date.day}
        ${post.date.strftime("%b")}
      </small>
    </header>
    <div class="post_body">
      <div class="post_prose">
        ${self.post_prose(post)}
      </div>
    </div>
    <footer class="post_footer_gradient">
      <div class="right">
       <span class="blog_post_categories">${", ".join(category_links)}</span>
       % if bf.config.blog.disqus.enabled:
       | <a href="${post.permalink}#disqus_thread">View Comments</a>
       % endif
      </div>
    </footer>
</article>

<%def name="post_prose(post)">
${post.content}
</%def>
