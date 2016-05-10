var serv = angular.module('serv', ['ngResource']);

serv.factory('PerfilService', function($resource){

    var resource = $resource('/perfil', null, {
        put:{method:'PUT'}
    });

    return resource;
});

serv.factory('CargoService', function($resource){

    var resource = $resource('/cargo', null, {
        put:{method:'PUT'}
    });

    return resource;
});

serv.factory('UsuarioService', function($resource){

    var resource = $resource('/usuario/:id', null, {
        put:{method:'PUT'}
    });

    return resource;
});
