module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify:{
      build: {
        src: 'src/**/*.js',
        dest: 'dist/findem.js'
      }
    },
    uglify:{
      my_target: {
        files: {
          'dist/findem.min.js': 'dist/findem.js'
        }
      }
    },
    sass: {
			dev: {
				options: {
					style: 'expanded',
				},
				files: {
					'compiled/style-expanded.css': 'src/css/main.scss'
				}
			},
			dist: {
				options: {
					style: 'compressed',
				},
				files: {
          'compiled/style.css': 'src/css/main.scss'
				}
			}
		},
    autoprefixer: {
			options: {
				browsers: ['last 2 versions']
			},
			multiple_files: {
				expand: true,
				flatten: true,
				src: 'compiled/*.css',
				dest: 'dist'
			}
		},
    watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass','autoprefixer']
			},
      scripts: {
        files: ['src/**/*.js'],
        tasks: ['browserify', 'uglify']
      }
		}
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['watch']);
}
