module.exports = function(grunt) {
    'use strict';

    // configuração do projeto
    var gruntConfig = {
        pkg: grunt.file.readJSON('package.json'),
        jade: {
            compile: {
                options: {
                    pretty: true
                },
                files: [ {
                    cwd: "_assets/_jade",
                    src: "**/*.jade",
                    dest: "../treinamento/public/view",
                    expand: true,
                    ext: ".html"
                } ]

            }
        },
        less: {
            compile: {
                options: {
                    pretty: true
                },
                files: [ {
                    cwd: "_assets/_less",
                    src: "**/*.less",
                    dest: "../treinamento/public/css",
                    expand: true,
                    ext: ".css"
                } ]
            }
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: "bower_components",
                    src: "**/*.*",
                    dest: "../treinamento/public/bower_components"
                }, {
                    expand: true,
                    cwd: "js",
                    src: "**/*.js",
                    dest: '../treinamento/public/js'
                }, {
                    expand: true,
                    cwd: "css",
                    src: "**/*.css",
                    dest: "../treinamento/public/css"
                }, {
                    expand: true,
                    cwd: "../treinamento/public/view",
                    src: "index.html",
                    dest: "../treinamento/public"
                }]
            }
        },
        //uglify: {
        //    my_target:{
        //        files: [ {
        //            cwd: "_assets/_js",
        //            src: "**/*.js",
        //            dest: "js",
        //            expand: true,
        //            ext: ".js"
        //        } ]
        //    }
        //},
        watch: {
            jade: {
                files: "**/*.jade",
                tasks: ['jade', 'copy']
            },
            less: {
                files: "**/*.less",
                tasks: ['less', 'copy']
            },
            copy: {
                files: "**/*.js",
                tasks: ['copy']
            }
        }
    };

    grunt.initConfig(gruntConfig);

    // carregando plugins
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // tarefas
    //grunt.registerTask('default', 'Converter Jade e Less em html e css', ['jade', 'less', 'uglify', 'watch']);
    grunt.registerTask('default', 'Converter Jade e Less em html e css', ['jade', 'less', 'copy', 'watch']);

};
