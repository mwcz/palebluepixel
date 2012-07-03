<%doc>
    <h2>${bf.config.blog.description}</h2>
</%doc>

<%
def nav_class(path):
   render_path = bf.template_context.render_path.rsplit("/index.html")[0]
   print( "path = %s" % path )
   print( "render_path = %s" % render_path )
   if render_path == path[1:] or (path == "/" and render_path == "."):

       return "active"

   return ""
%>

    <div class="navbar navbar-fixed-top"> 
      <div class="navbar-inner"> 
        <div class="container"> 
          <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"> 
            <span class="icon-bar"></span> 
            <span class="icon-bar"></span> 
            <span class="icon-bar"></span> 
          </a> 
          <a class="brand" href="${bf.util.site_path_helper()}">${bf.config.blog.name}</a>
          <div class="nav-collapse"> 
            <ul class="nav"> 
              <li class="${nav_class(bf.util.site_path_helper(bf.config.blog.path,'/'))}">
                <a href="${bf.util.site_path_helper(bf.config.blog.path,'/')}">
                    Home
                </a>
              <li class="${nav_class(bf.util.site_path_helper(bf.config.blog.path,'projects'))}">
                <a href="${bf.util.site_path_helper(bf.config.blog.path,'projects')}">
                    Projects
                </a>
              </li>
              <li class="${nav_class(bf.util.site_path_helper(bf.config.blog.path,'archive'))}">
                <a href="${bf.util.site_path_helper(bf.config.blog.path,'archive')}">
                    Archives
                </a>
              </li>
              <li class="${nav_class(bf.util.site_path_helper(bf.config.blog.path,'category/mwcz.org'))}">
                <a href="${bf.util.site_path_helper(bf.config.blog.path,'category/mwcz.org')}">
                    About
                </a>
              </li>
            </ul> 
          </div><!--/.nav-collapse --> 
        </div> 
      </div> 
    </div> 

