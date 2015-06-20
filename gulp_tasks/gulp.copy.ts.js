// Import config
var config = require('./gulp.config.js');

// Html module
module.exports = function(gulp){

	gulp.task('copy.ts', 'Copy source Typescript files to the dist folder for sourcemaps', function(){
        return gulp.src(config.app.copy_ts,{base:config.app.base})
            .pipe(gulp.dest('source/',{cwd:config.dist}));
    });
};
