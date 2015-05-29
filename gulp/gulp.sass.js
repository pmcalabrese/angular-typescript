// Import modules
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// Import config
var config = require('./gulp.config.js');

// Sass module
module.exports = function(gulp){
	gulp.task('sass', 'Compile app Sass files app to css and concatenate in a file called app.css', function(){
	    return gulp.src(config.app.sass)
	        .pipe(sass().on('error', sass.logError))
	    	.pipe(autoprefixer())
	        .pipe(gulp.dest('css',{cwd:config.dist}));
    });
};
