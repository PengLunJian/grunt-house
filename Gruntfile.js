/**
 * Created by PengLunJian on 2017-8-2.
 */
'use strict';
module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    require('time-grunt')(grunt);

    var config = {
        src: 'src',
        dist: 'dist',
        test: 'test',
    }

    grunt.initConfig({
        config: config,
        copy: {
            dist: {
                src: '<%= config.src %>/index.html',
                dest: '<%= config.dist %>/index.html'
            },
            test: {
                src: '<%= config.src %>/index.html',
                dest: '<%= config.test %>/index.html'
            }
        },
        clean: {
            test: {
                src: '<%= config.test %>/index.html'
            },
            dist: {
                src: '<%= config.dist %>/index.html'
            }
        }
    });

    grunt.registerTask('default', [''], function () {
        console.log("SUCCESS");
    });
};