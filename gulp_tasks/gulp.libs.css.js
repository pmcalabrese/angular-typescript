// Import modules
var concat = require('gulp-concat');

// Import config
var config = require('./gulp.config.js');

module.exports = function(gulp){

	gulp.task('libs.css', 'Process the css from the external libs', function() {
		return gulp.src(config.libs.css)
			.pipe(concat('libs.css'))
			// .pipe(gulpif(getenv(['production','stage']), uglify()))
			.pipe(gulp.dest('css/', { cwd: config.dist }));
	});
};
