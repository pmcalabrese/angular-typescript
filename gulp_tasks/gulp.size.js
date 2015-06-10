var gulp = require('gulp');
var size = require('gulp-size');

// Import config
var config = require('./gulp.config.js');

module.exports = function(gulp){
    gulp.task('size', function () {
        return gulp.src(config.dist+"/**/*")
            .pipe(size({
                showFiles: true
            }));
    });
};
