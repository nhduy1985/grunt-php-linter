module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
            reporter: require('jshint-stylish')
      },
      //JS files need to be validate
      all: [
        'Gruntfile.js', 
        'src/**/*.js'
      ],
    },
    csslint: {
      strict: {
        options: {
          import: 2
        },
        src: ['src/**/*.css']
      }
    },
    phpcsfixer: {
      app: {
          dir: 'src/app'
      },
      options: {
          bin: 'php php-cs-fixer.phar',
          ignoreExitCode: true,          
          level: 'all',
          quiet: false
      }
  }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-php-cs-fixer');

  // Default task(s).
  grunt.registerTask('linter', ['phpcsfixer']);

};