// Import modules
var ts = require('gulp-typescript');

// Import config
var config = require('./gulp.config.js');

module.exports = function(gulp){

	gulp.task('ts', 'Compile from Typescript to javascript and concatenate in one file called main.js the entire app', function () {
	  var tsResult = gulp.src(config.app.script)
	    .pipe(ts({
			noImplicitAny: true,
			out: 'main.js'
		}));
		return tsResult.js.pipe(gulp.dest('js',{cwd:config.dist}));
	});
};
