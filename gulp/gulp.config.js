var globalPath = {
    app : "../src/",
    bower : "../bower_components/"
};

module.exports = {
	app: {
        script: [
            globalPath.app+'common/**/*ts',
            globalPath.app+'components/**/*ts',
            globalPath.app+'components/app.ts'
    	],
        sass: [
            globalPath.app+'sass/app.scss'
    	],
        sass_all: [
            globalPath.app+'sass/*/*.scss'
        ],
        copy: [
            globalPath.app+"index.html",
            globalPath.app+"components/**/*.html"
        ]
    },
    libs: {
        script:[
            globalPath.bower+"lodash/lodash.min.js",
            globalPath.bower+"angular/angular.min.js",
            globalPath.bower+"angular-route/angular-route.min.js",
            globalPath.bower+"angular-ui-router/release/angular-ui-router.min.js",
            globalPath.bower+"angular-animate/angular-animate.min.js",
            globalPath.bower+"angular-aria/angular-aria.min.js",
            globalPath.bower+"angular-material/angular-material.min.js",
        ],
        css: [
            globalPath.bower+"angular-material/angular-material.min.css",
        ]
    },
    dist : "../dist/"
};
