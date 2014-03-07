module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    settings: grunt.file.readJSON('projects/config.vestito.json'),
    verbose: true,
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        reporter: require('jshint-stylish'),
        reporterOutput: 'reports/jshint.report'
      },
      all: '<%= settings.paths.js %>',
    },
    csslint: {
      strict: {
        options: {
          import: 2,
          absoluteFilePathsForFormatters: true,
          formatters: [{
            id: 'text',
            dest: 'reports/csslint.report'
          }],
          quiet: true,
          'adjoining-classes': false,
          'ids': false,
          'fallback-color': false,
          'universal-selector': false
        },
        src: '<%= settings.paths.css %>'
      }
    },
    phpcsfixer: {
      app: {
        dir: '<%= settings.paths.php_dir %>'
      },
      options: {
        bin: 'php tools/php-cs-fixer.phar',
        ignoreExitCode: true,
        level: 'all',
        quiet: false,
        fixers: '-braces'
      }
    },
    phpcpd: {
      application: {
        dir: '<%= settings.paths.php_dir %>'
      },
      options: {
        bin: 'php tools/phpcpd.phar',
        quiet: false,
        reportFormat: 'txt',
        reportFile: 'reports/phpcpd.report',
        ignoreExitCode: true
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-php-cs-fixer');
  grunt.loadNpmTasks('grunt-phpcpd');
  // Default task(s).
  grunt.registerTask('linter', 'Linter Task', function() {
    grunt.option('force', true);
    grunt.task.run(['jshint', 'csslint', 'phpcpd', 'phpcsfixer'])
  });
  grunt.registerTask('test', ['phpcsfixer']);
};