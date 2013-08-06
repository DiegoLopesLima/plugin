module.exports = function(grunt) {

	'use strict';

	var

		pack = grunt.file.readJSON('package.json'),

		data = grunt.file.readJSON(pack.name + '.jquery.json'),

		uglify = {};

	uglify[data.name + '.min.js'] = data.name + '.js';

	grunt.config.init({
		uglify : {
			dist : {
				files : uglify,
				options : {
					banner : '/*! ' + data.title + ' | http://plugins.jquery.com/' + data.name + '/' + data.version + ' */\n;'
				}
			}
		},
		qunit : {
			dist : {
				options : {
					urls : [data.name + '.test.html']
				}
			}
		},
		jshint : {
			dist : {
				src : [pack.name + '.js'],
				options : {
					camelcase : true,
					immed : true,
					indent : true,
					latedef : true,
					newcap : true,
					noarg : true,
					noempty : true,
					quotmark : true,
					undef : true,
					unused : true,
					strict : true,
					trailing : true,
					browser: true,
					globals : {
						jQuery : true
					}
				}
			}
		},
		watch : {
			dist : {
				files : [data.name + '.js'],
				tasks : ['uglify:dist', 'qunit:dist', 'jshint:dist']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.loadNpmTasks('grunt-contrib-qunit');

	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['uglify:dist', 'qunit:dist', 'jshint:dist']);
};