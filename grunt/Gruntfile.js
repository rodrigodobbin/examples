module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('config.json'),
    sass: {
      dist: {
        files: [{
          expand: true, // Set to true to enable the properties below
          cwd: './scss',
          src: '<%= pkg.name %>.scss',
          dest: './public/css',
          ext: '.css'
        }]
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      }
    },
    cssmin: {
      target: {
        files: {
          'public/css/<%= pkg.name %>.min.css': './public/css/app.css'
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // tasks.
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('serve', ['sass', 'watch']);
  grunt.registerTask('build', ['sass', 'cssmin']);

};
