module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'dist/assets/js/*.js',
        '!dist/assets/js/bootstrap.min.js'
      ]
    },
    less: {
      dist: {
        files: {
          'dist/assets/css/main.css': [
            'dist/assets/less/main.less'
          ]
        },
        options: {
          compress: false,
          // LESS source map
          // To enable, set sourceMap to true and update sourceMapRootpath based on your install
          sourceMap: true,
          sourceMapFilename: 'dist/assets/css/main.min.css.map',
          sourceMapRootpath: '../'
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'dist/assets/js/bootstrap.min.js': [
            'dist/assets/vendor/bootstrap/js/transition.js',
            'dist/assets/vendor/bootstrap/js/alert.js',
            'dist/assets/vendor/bootstrap/js/button.js',
            'dist/assets/vendor/bootstrap/js/carousel.js',
            'dist/assets/vendor/bootstrap/js/collapse.js',
            'dist/assets/vendor/bootstrap/js/dropdown.js',
            'dist/assets/vendor/bootstrap/js/modal.js',
            'dist/assets/vendor/bootstrap/js/tooltip.js',
            'dist/assets/vendor/bootstrap/js/popover.js',
            'dist/assets/vendor/bootstrap/js/scrollspy.js',
            'dist/assets/vendor/bootstrap/js/tab.js',
            'dist/assets/vendor/bootstrap/js/affix.js'
          ]
        },
        options: {
          // JS source map: to enable, uncomment the lines below and update sourceMappingURL based on your install
          sourceMap: 'dist/assets/js/bootstrap.min.js.map',
          sourceMappingURL: 'dist/assets/js/main.min.js.map'
        }
      }
    },
    watch: {
      options: {
        livereload: 58533
      },
      less: {
        files: [
          'dist/assets/less/*.less',
          'dist/assets/less/bootstrap/*.less'
        ],
        tasks: ['less']
      },
      js: {
        files: [
          '<%= jshint.all %>'
        ],
        tasks: ['jshint', 'clean:js', 'uglify']
      }
    },
    open: {
      all: {
        path: 'http://localhost:<%= express.all.options.port%>'
      }
    },
    express: {
      all: {
        options: {
          port: 8001,
          hostname: '0.0.0.0',
          bases: 'dist', // Replace with the directory you want the files served from
                              // Make sure you don't use `.` or `..` in the path as Express
                              // is likely to return 403 Forbidden responses if you do
                              // http://stackoverflow.com/questions/14594121/express-res-sendfile-throwing-forbidden-error
          livereload: 58533
        }
      }
    },
    clean: {
      dist: [
        'dist/assets/css/main.min.css',
        'dist/assets/js/main.min.js'
      ],
      js: [
        'dist/assets/js/main.min.js'
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-open');
  
  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'less',
    'uglify'
  ]);
  grunt.registerTask('dev', [
    'express',
    'open',
    'watch'
  ]);

};