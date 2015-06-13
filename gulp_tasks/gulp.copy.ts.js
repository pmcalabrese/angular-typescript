// Import config
var config = require('./gulp.config.js');

var merge = require('merge-stream');

// Html module
module.exports = function(gulp){

	gulp.task('copy.ts', 'Copy source Typescript files to the dist folder for sourcemaps', function(){
        return gulp.src(config.app.copy_ts,{base:config.app.base})
            .pipe(gulp.dest('source/',{cwd:config.dist}));

		// var components = gulp.src(config.app.base+'components/**/*ts')
	    //     .pipe(gulp.dest('source/components',{cwd:config.dist}));
		//
		// return merge(common,components);
    });
};
