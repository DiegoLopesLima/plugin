module.exports = function(grunt) {

	'use strict';

	var

		pack = grunt.file.readJSON('package.json');

	grunt.config.init({});

	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.loadNpmTasks('grunt-contrib-qunit');

	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['uglify:dist', 'jshint:dist', 'qunit:dist']);
};