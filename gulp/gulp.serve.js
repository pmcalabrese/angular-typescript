// Import modules
var server = require('gulp-server-livereload');

// Import config
var config = require('./gulp.config.js');

var serverConfig = {
	port:8000,
	host:"0.0.0.0",
	livereload: {
		enable: true
	},
	directoryListing: false,
	defaultFile: 'index.html'
};

// Takana module
module.exports = function(gulp){
	gulp.task('serve', 'run a static Node.js server for development on port '+serverConfig.port, function() {
	  gulp.src(config.dist)
	    .pipe(server(serverConfig));
	});
};
