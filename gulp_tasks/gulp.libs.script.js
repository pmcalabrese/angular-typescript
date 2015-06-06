// Import modules
var concat = require('gulp-concat');

// Import config
var config = require('./gulp.config.js');

module.exports = function(gulp){

	gulp.task('libs.script', 'Process the scripts from the external libs' , function() {
		return gulp.src(config.libs.script)
			.pipe(concat('libs.js'))
			// .pipe(gulpif(getenv(['production','stage']), uglify()))
			.pipe(gulp.dest('js/', { cwd: config.dist }));
	});
};
