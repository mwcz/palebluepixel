<%inherit file="_templates/site.mako" />
<article class="page_box">
<%self:filter chain="markdown">

My past, present, and future projects
=====================================

</%self:filter>

<div id="projects">

% for project in bf.projects:
    <article class="project">

        <a href="${project.path}">
            <img class="grid_2" src="${project.icon}" />
        </a>

        <h1 class="grid_5">
            <a href="${project.path}">
            ${project.name}
            </a>
        </h1>

        <p class="grid_5">${project.desc}</p>

    </article>

    <div class="clear"></div>

% endfor

</div>

</article>
