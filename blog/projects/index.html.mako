<%inherit file="_templates/site.mako" />
<article class="page_box">
<%self:filter chain="markdown">

Welcome to mwcz.org
====================

<dl>

% for project in bf.projects:
    <dt class="grid_2">
        ${project.name}
        <br />
        <img src="${project.icon}" style="width: 95px; float: left;" />
        <div class="clear"></div>
    </dt>
    <dd class="grid_5">
        ${project.desc}
    </dd>

% endfor

</dl>

</%self:filter>
</article>
