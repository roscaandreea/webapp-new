module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		cssmin: {
			dist: {
				src: 'public/css/site.css',
				dest: 'public/css/site.min.css',
			}
		},
		bowercopy: {
			dist: {
				options: {
					destPrefix: 'public/vendor'
				},
				files: {
					'bootstrap/bootstrap.min.css': 'bootstrap/dist/css/bootstrap.min.css',
					'angular/angular.min.js': 'angular/angular.min.js',
				}
			}
		},
		watch: {
		  stylesheets: {
		    files: ['public/css/site.css'],
		    tasks: ['cssmin'],
		    options: {
		      spawn: false, //faster, but prone to errors
		      debounceDelay: 250 //delay for automated tasks
		    }
		  },
		  livereload: {
		    options: { livereload: true },
		    files: ['server/views/**/*', '/public/**/*']
		  }
		}
	
	});
	
	grunt.registerTask('default', ['cssmin', 'bowercopy', 'watch']);


	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-bowercopy');
};