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
                    dest: "",
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
                    dest: "css",
                    expand: true,
                    ext: ".css"
                } ]
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
                tasks: ['jade']
            },
            less: {
                files: "**/*.less",
                tasks: ['less']
            }
        }
    };

    grunt.initConfig(gruntConfig);

    // carregando plugins
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // tarefas
    //grunt.registerTask('default', 'Converter Jade e Less em html e css', ['jade', 'less', 'uglify', 'watch']);
    grunt.registerTask('default', 'Converter Jade e Less em html e css', ['jade', 'less', 'watch']);

};
