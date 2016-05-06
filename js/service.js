var serv = angular.module('serv', ['ngResource']);

serv.factory('PerfilService', function($resource){

    var resource = $resource(null,null,{
        listar:{method:'GET', url:'/perfil/listar', isArray: true},
        salvar:{method:'POST', url:'/perfil/salvar', params:'{data}'},
        apagar:{method:'POST', url:'/perfil/apagar', params:'{data}'},
        editar:{method:'POST', url:'/perfil/editar', params:'{data}'}
    });

    return resource;
});

serv.factory('CargoService', function($resource){

    var resource = $resource(null,null,{
        listar:{method:'GET', url:'/cargo/listar', isArray: true},
        salvar:{method:'POST', url:'/cargo/salvar', params:'{data}'},
        apagar:{method:'POST', url:'/cargo/apagar', params:'{data}'},
        editar:{method:'POST', url:'/cargo/editar', params:'{data}'}
    });

    return resource;
});

serv.factory('UsuarioService', function($resource){

    var resource = $resource(null,null,{
        listar:{method:'GET', url:'/usuario/listar', isArray: true},
        salvar:{method:'POST', url:'/usuario/salvar', params:'{data}'},
        apagar:{method:'POST', url:'/usuario/apagar', params:'{data}'},
        buscar:{method:'POST', url:'/usuario/buscar', params:'{data}'}
    });

    return resource;
});
