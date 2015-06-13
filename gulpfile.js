// Include gulp with help
var gulp = require('gulp-help')(require('gulp'));
var runSequence = require('run-sequence');

// Get/set variables
var config = require('./gulp_tasks/gulp.config');

///
///	 Import modularized tasks
///

// Imports Sass - compile sass to css
require('./gulp_tasks/gulp.sass')(gulp);

// Imports Copy - just copy some file to the dist directorya
require('./gulp_tasks/gulp.copy')(gulp);

// Imports Copy - just copy some file to the dist directorya
require('./gulp_tasks/gulp.copy.ts')(gulp);

// Imports Typescript - compile Typescript to javascript and it concat in one file called main.js
require('./gulp_tasks/gulp.ts')(gulp);

// Imports libs script - compile all js file in one filec alled libs.js
require('./gulp_tasks/gulp.libs.script')(gulp);

// Imports libs script - compile all js file in one filec alled libs.js
require('./gulp_tasks/gulp.libs.css')(gulp);

// Imports Clean - delete all the content from the dist folder
require('./gulp_tasks/gulp.clean')(gulp);

// Imports Serve - spin a development server on port 8000
require('./gulp_tasks/gulp.serve')(gulp);

// Imports Serve - spin a development server on port 8000
require('./gulp_tasks/gulp.typedoc')(gulp);

// Imports Serve - spin a development server on port 8000
require('./gulp_tasks/gulp.size')(gulp);


///
///  Setup group tasks
///

// Creates a default build task
var default_tasks = ['sass','copy','ts','libs.script','libs.css','copy.ts'];
gulp.task('default', "Run "+default_tasks.toString(), default_tasks , function(cb) {
    return gulp.src(config.app.script);
});

// Creates a watch task to watch files and build async
gulp.task('watch', 'Run the default task and then serve, while it serves whatch for files and run the task accordingly. If you are a developer you want to start from here' ,function (cb) {
    gulp.watch(config.app.sass_all, ['sass']);
    gulp.watch(config.app.copy, ['copy']);
    gulp.watch(config.app.script, ['ts','copy.ts']);
    gulp.watch(config.libs.script, ['libs.script']);
    gulp.watch(config.libs.css, ['libs.css']);
    runSequence('default','serve',cb);
});
