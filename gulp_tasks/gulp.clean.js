// Import modules
var del = require('del');

// Import config
var config = require('./gulp.config.js');

// Sass module
module.exports = function(gulp){

    gulp.task('clean', 'Remove all files from the dist folder', function (cb) {
        del(['*'], {cwd: config.dist}, cb);
    });
};
