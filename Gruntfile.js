module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    connect: {
      'static': {
          options: {
              hostname: 'localhost',
              port: 8001,
              keepalive: true
          }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'assets/js/*.js',
        '!assets/js/main.min.js'
      ]
    },
    less: {
      dist: {
        files: {
          'assets/css/main.min.css': [
            'assets/less/app.less'
          ]
        },
        options: {
          compress: true,
          // LESS source map
          // To enable, set sourceMap to true and update sourceMapRootpath based on your install
          sourceMap: true,
          sourceMapFilename: 'assets/css/main.min.css.map',
          sourceMapRootpath: '/'
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'assets/js/main.min.js': [
            'assets/js/bootstrap/transition.js',
            'assets/js/bootstrap/alert.js',
            'assets/js/bootstrap/button.js',
            'assets/js/bootstrap/carousel.js',
            'assets/js/bootstrap/collapse.js',
            'assets/js/bootstrap/dropdown.js',
            'assets/js/bootstrap/modal.js',
            'assets/js/bootstrap/tooltip.js',
            'assets/js/bootstrap/popover.js',
            'assets/js/bootstrap/scrollspy.js',
            'assets/js/bootstrap/tab.js',
            'assets/js/bootstrap/affix.js',
            'assets/js/*.js'
          ]
        },
        options: {
          // JS source map: to enable, uncomment the lines below and update sourceMappingURL based on your install
           sourceMap: 'assets/js/main.min.js.map',
           sourceMappingURL: '/assets/js/main.min.js.map'
        }
      }
    },
    watch: {
      less: {
        files: [
          'assets/less/*.less',
          'assets/less/bootstrap/*.less'
        ],
        tasks: ['less']
      },
      js: {
        files: [
          '<%= jshint.all %>'
        ],
        tasks: ['jshint', 'uglify']
      },
      livereload: {
        // Browser live reloading
        // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
        options: {
          livereload: false
        },
        files: [
          'assets/css/main.min.css',
          'assets/js/scripts.min.js'
        ]
      }
    },
    clean: {
      dist: [
        'assets/css/main.min.css',
        'assets/js/main.min.js'
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'less',
    'uglify'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};