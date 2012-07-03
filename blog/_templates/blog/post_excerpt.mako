<%page args="post"/>

<% 
   #print(dir(post))
   category_links = []
   for category in post.categories:
       if post.draft:
           #For drafts, we don't write to the category dirs, so just write the categories as text
           category_links.append(category.name)
       else:
           category_links.append("<a href='%s'>%s</a>" % (category.path, category.name))
%>

<article class="blog_post span4">
  <div class="well">
    <header class="page-header">
      <h1>
        <a href="${post.permapath()}" rel="bookmark" title="Permanent Link to ${post.title}">
          ${post.title}
        </a>
      </h1>
      <small> ${post.date.strftime("%b")} ${post.date.day}, ${post.date.year} </small>
    </header>
    <p>
        ${post.excerpt}
    </p>
  </div>
</article>

<%def name="post_prose(post)">
${post.excerpt}
</%def>
