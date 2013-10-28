Title: finding files in vim
Tags: vim, tools
Date: 2011-11-19 13:50:03
Status: draft

Huge problem with this method: with my vim command autocomplete settings, vim will not cycle through matching names.  If I do :b style<Tab>, it will find the style.css for each theme, but will not cycle through them.  
Iirc the vim settings cause it to either print a list of all matching names when you hit tab, OR cycle through each match.  If I can configure it to print the list on the first tab, and cycle through on each subsequent tab, it might work.  Leaving this unpublished until then.

Eclipse Ctrl+Shift+R
Emacs http://www.emacswiki.org/emacs/FindFileInProject
TextMate cmd-T


    cd ~/workspace/myproject/
    vim
    :n **

These commands will recursively open every file in the project.  It might seem wasteful

    :q!
 
Drawbacks
---------

There's no such thing as a perfect method (for doing anything), and this one has a few drawbacks.


If you like using tabs in gvim, this probably won't work.  It opens every file in the project, and vim won't open many tabs at once.  The command `:tabnew **` in my 500-file project results in: ![Buffers menu with many files open](/static/images/010/too_many_file_names.png).  I typically use vim inside [Terminator](http://software.jessies.org/terminator/), and use multiple buffers in a single window, instead of in tabs.  If you do use gvim, a nice tab-like option is the Buffers menu.

![Buffers menu with many files open](/static/images/010/vim_gui_buffer_list.png)

It opens all files, including binary files.  You'll never see any of them unless you switch to its buffer.

![Screenshot of "Many more files to edit" message in vim](/static/images/010/more_files_to_edit.png)

Sources
-------

[Documentation for the :next command](http://vimdoc.sourceforge.net/htmldoc/editing.html#:next)
