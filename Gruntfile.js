/**
 * Created by PengLunJian on 2017-8-2.
 */
"use strict";
module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        clean: {
            test: 'test/*',
            dist: 'dist/*'
        },
        copy: {
            html: {
                expand: true,
                cwd: 'src',
                src: '*.html',
                dest: 'test/',
            },
            script: {
                expand: true,
                cwd: 'src/js',
                src: '*.js',
                dest: 'test/js/',
            }
        },
        csslint: {
            src: ['test/css/*.css', 'dist/css/*.css']
        },
        jshint: {
            all: ['lib/**/*.js', 'src/**/*.js']
        },
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 3
                },
                files: [
                    {
                        expand: true,
                        cwd: 'src/images/',
                        src: ['*.{png,jpg,jpeg,gif}'],
                        dest: 'test/images/'
                    }
                ]
            }
        },
        concat: {
            /* 合并 CSS 文件 */
            css: {
                src: ['css/normalize.min.css', 'css/cssgrids-min.css', 'css/helper.css', 'css/main.css', '...'],
                /* 根据目录下文件情况配置 */
                dest: 'css/all.css'
            },
            js: {
                src: [''],
                /* 根据目录下文件情况配置 如果可以使用 require.js/LABjs 等配置更佳 */
                dest: 'js/all.js'
            }
        },
        less: {
            css: {
                expand: true,
                cwd: 'src/less/',
                src: ['*.less', '!variable.less'],
                dest: 'test/css',
                ext: '.css',
                extDot: 'last'
            }
        },
        cssmin: {
            options: {
                keepSpecialComments: 0 /* 移除 CSS 文件中的所有注释 */
            },
            minify: {
                expand: true,
                cwd: 'css/',
                src: ['src/less/*.less'],
                dest: 'dist/css/',
                ext: '.min.css'
            }
        },
        uglify: {
            minjs: {
                files: [{
                    expand: true,
                    cwd: 'src/js/',
                    src: ['*.js'],
                    dest: 'test/js/',
                    ext: '.min.js'
                }]
            }
        },
        watch: {
            image: {
                files: ['src/images/*.{png,jpg,jpeg,gif}'],
                options: {
                    livereload: true
                },
                tasks: ['imagemin']
            },
            less: {
                options: {
                    event: ['changed', 'added'],
                    livereload: true
                },
                files: ['src/less/*.less', '!src/less/variable.less'],
                tasks: ['less']
            },
            copy: {
                options: {
                    livereload: true
                },
                files: ['src/js/*.js', 'src/*.html'],
                tasks: ['copy']
            }
        }
    });

    grunt.registerTask('dev', ['copy', 'less', 'csslint', 'imagemin']);
    grunt.registerTask('build', ['csslint', 'jshint', 'imagemin', 'cssmin', 'uglify']);
    grunt.registerTask('default', ['csslint', 'jshint', 'imagemin', 'cssmin', 'uglify']);

};