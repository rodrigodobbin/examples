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
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // tasks.
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('serve', ['sass', 'watch']);

};
