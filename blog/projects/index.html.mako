<%inherit file="_templates/site.mako" />

% for i in range( len( bf.projects ) ):

    % if i % 3 == 0:
    <div class="row-fluid">
    % endif

        <div class="span4 well">

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

    % if i % 3 == 3:
    </div>
    % endif

% endfor
