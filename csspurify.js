var purify = require('purify-css');
var dive = require('diveSync');

var dive_options = {
    recursive   : true,
    all         : false,
    directories : false,
    files       : true
};

var files = [];

function append(err, file) {
    files.push(file);
}

function is_html(path) {
    return /\.html$/.test(path);
}

function is_css(path) {
    return /\.css/.test(path);
}

function blacklist(path) {
        
    return !/static\/projects/.test(path);
}

dive('./output', dive_options, append);

var html_files = files.filter(is_html).filter(blacklist);
var css_files  = ['styles.min.css']; // all files:  files.filter(is_css);

purify(html_files, css_files, function(output) {
    console.log(output);
});
