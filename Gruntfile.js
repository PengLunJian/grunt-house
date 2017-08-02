/**
 * Created by PengLunJian on 2017-8-2.
 */
module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        }
    });
    grunt.registerTask('default', 'Log some stuff.', function () {
        grunt.log.write('Logging some stuff...').ok();
    });
};