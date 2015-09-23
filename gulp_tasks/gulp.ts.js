// Import modules
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

// Import config
var config = require('./gulp.config.js');

module.exports = function(gulp){

	gulp.task('ts', 'Compile from Typescript to javascript and concatenate in one file called main.js the entire app (builds also the sourcemaps)', function () {

		var sourceTsFiles = config.app.script.concat(config.app.dts);

		var tsResult = gulp.src(sourceTsFiles)
		   .pipe(sourcemaps.init())
		   .pipe(ts({
				target: 'ES5',
				declarationFiles: true,
				noExternalResolve: true,
				noImplicitAny: false,
				out: 'main.js'
		   }));

		tsResult.dts.pipe(gulp.dest('js',{cwd:config.dist}));
		return tsResult.js
		    .pipe(sourcemaps.write('.',{sourceRoot: '/source'}))
			.pipe(gulp.dest('js',{cwd:config.dist}));
	});
};
