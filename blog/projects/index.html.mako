<%inherit file="_templates/site.mako" />
<article class="page_box">
<%self:filter chain="markdown">

My past, present, and future projects
=====================================

</%self:filter>

<div id="projects">

% for project in bf.projects:

    <div class="row-fluid project-page-row">

        <a href="${project.path}">
            <img class="span2" src="${project.icon}" />
        </a>

        <h1 class="span9">
            <a href="${project.path}">
                ${project.name}
            </a>
        </h1>

        <p class="span9">${project.desc}</p>

    </div>

% endfor

</div>

</article>
