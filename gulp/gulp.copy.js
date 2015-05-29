// Import config
var config = require('./gulp.config.js');

// Html module
module.exports = function(gulp){

	gulp.task('copy', 'Copy files that does not to be processed from the source to the dist folder', function(){
        return gulp.src(config.app.copy)
            .pipe(gulp.dest('.',{cwd:config.dist}));
    });
};
