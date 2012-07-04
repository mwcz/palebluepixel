<%inherit file="_templates/site.mako" />

% for i in range( len( bf.projects ) ):

    % if i % 4 == 0:
    <div class="row-fluid">
    % endif

        <div class="span3 well" style="height: 340px; overflow: hidden;">

            <h1>
                <a href="${bf.projects[i].path}">
                    ${bf.projects[i].name}
                </a>
            </h1>

            <p>
                <a href="${bf.projects[i].path}">
                    <img src="${bf.projects[i].icon}" />
                </a>
            <p>

            <p>${bf.projects[i].desc}</p>

        </div>

    % if i % 4 == 3:
    </div>
    % endif

% endfor
