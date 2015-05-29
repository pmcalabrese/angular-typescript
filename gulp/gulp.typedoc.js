var typedoc = require("gulp-typedoc");

// Import config
var config = require('./gulp.config.js');

module.exports = function(gulp){
    gulp.task("typedoc","Generate automatic documentation in the folder 'doc'" ,function() {
        return gulp
            .src(config.app.script)
            .pipe(typedoc({
                module: "commonjs",
                out: "../docs",
                mode: "modules",
                name: "Angular Typescript",
                target: "es5",
                includeDeclarations: true
            }))
        ;
    });
};
