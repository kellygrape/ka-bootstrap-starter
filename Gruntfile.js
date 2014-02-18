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
        '!dist/assets/js/main.min.js'
      ]
    },
    less: {
      dist: {
        files: {
          'dist/assets/css/main.min.css': [
            'dist/assets/less/app.less'
          ]
        },
        options: {
          compress: true,
          // LESS source map
          // To enable, set sourceMap to true and update sourceMapRootpath based on your install
          sourceMap: true,
          sourceMapFilename: 'dist/assets/css/main.min.css.map',
          sourceMapRootpath: '/dist/'
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'dist/assets/js/main.min.js': [
            'dist/assets/js/bootstrap/transition.js',
            'dist/assets/js/bootstrap/alert.js',
            'dist/assets/js/bootstrap/button.js',
            'dist/assets/js/bootstrap/carousel.js',
            'dist/assets/js/bootstrap/collapse.js',
            'dist/assets/js/bootstrap/dropdown.js',
            'dist/assets/js/bootstrap/modal.js',
            'dist/assets/js/bootstrap/tooltip.js',
            'dist/assets/js/bootstrap/popover.js',
            'dist/assets/js/bootstrap/scrollspy.js',
            'dist/assets/js/bootstrap/tab.js',
            'dist/assets/js/bootstrap/affix.js',
            'dist/assets/js/*.js'
          ]
        },
        options: {
          // JS source map: to enable, uncomment the lines below and update sourceMappingURL based on your install
           sourceMap: 'dist/assets/js/main.min.js.map',
           sourceMappingURL: '/dist/assets/js/main.min.js.map'
        }
      }
    },
    watch: {
      options: {
        livereload: 5853
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
        tasks: ['jshint', 'uglify']
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
          hostname: "0.0.0.0",
          bases: 'dist', // Replace with the directory you want the files served from
                              // Make sure you don't use `.` or `..` in the path as Express
                              // is likely to return 403 Forbidden responses if you do
                              // http://stackoverflow.com/questions/14594121/express-res-sendfile-throwing-forbidden-error
          livereload: 5853
        }
      }
    },
    clean: {
      dist: [
        'dist/assets/css/main.min.css',
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