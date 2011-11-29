<header id="main_header">
  <div id="header">
    <h1><a href="${bf.util.site_path_helper()}">${bf.config.blog.name}</a></h1>
<%doc>
    <h2>${bf.config.blog.description}</h2>
</%doc>
  </div>
  <div id="navigation" class="grid_12">
<%
def nav_class(path):
   render_path = bf.template_context.render_path.rsplit("/index.html")[0]
   if render_path == path or (path == "/" and render_path == "."):
       return "selected"
   return ""
%>
    <ul>
      <li><a href="${bf.util.site_path_helper()}"
             class="${nav_class(bf.util.site_path_helper())}">Home</a></li>
      <li><a href="${bf.util.site_path_helper(bf.config.blog.path,'archive')}"
             class="${nav_class(bf.util.site_path_helper(bf.config.blog.path,'archive'))}">Archives</a></li>
    </ul>
  </div>
</header>
