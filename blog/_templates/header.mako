<header id="main_header">
  <div id="header" class="grid_12">
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
      <li>
        <div class="slider"> </div>
        <a href="${bf.util.site_path_helper()}"
           class="${nav_class(bf.util.site_path_helper())}">
            Home
        </a>
      </li>
      <li>
        <div class="slider"> </div>
        <a href="${bf.util.site_path_helper(bf.config.blog.path,'archive')}"
           class="${nav_class(bf.util.site_path_helper(bf.config.blog.path,'archive'))}">
            Projects
        </a>
      </li>
      <li>
        <div class="slider"> </div>
        <a href="${bf.util.site_path_helper(bf.config.blog.path,'archive')}"
           class="${nav_class(bf.util.site_path_helper(bf.config.blog.path,'archive'))}">
            Archives
        </a>
      </li>
      <li>
        <div class="slider"> </div>
        <a href="${bf.util.site_path_helper(bf.config.blog.path,'archive')}"
           class="${nav_class(bf.util.site_path_helper(bf.config.blog.path,'archive'))}">
            About
        </a>
      </li>
    </ul>
  </div>
</header>
