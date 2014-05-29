/*global module:false*/
module.exports = function(grunt) {
  
  var jshintrc = grunt.file.readJSON('.jshintrc'),
      _ = require("underscore");

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jshint: {
      app: ['js/**/*.js'],
      configuration: {
        files: {
          src: ['Gruntfile.js', 'karma.conf.js']
        },
        options: {}
      },
      specs: {
        files: {
          src: 'spec/**/*.js',
        },
        options: _.extend(jshintrc, {
          onevar: false
        })
      },
      options: jshintrc
    },
    karma: {
      options: {
        configFile: 'karma.conf.js',
        browsers: ['PhantomJS']
      },
      ci: {
        singleRun: true
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: ['jshint:lib_test']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('specs', ['karma:ci']);
  grunt.registerTask('ci', [
    'jshint',
    'specs'
  ]);

};
