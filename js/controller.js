'use strict';

/* Controllers */

var ctrl = angular.module('ctrl', []);

ctrl.controller('PillsCtrl', function($scope, $location) {

    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});

ctrl.controller('UsuariosCtrl', function($scope, $routeParams, UsuarioService) {

    $scope.usuarios = UsuarioService.listar();

    $scope.pushPerfil = function(perfil) {
        var perfis = "";
        perfis.forEach(function(perfil) {
            perfis += perfil.nome + ", ";
        });
        return lista;
    };

    $scope.remover = function (usuario) {
        UsuarioService.apagar(usuario, function(){
            alert("Usuário removido com sucesso.");
            location.reload();
        }, function(){
            alert("Falha ao remover o usuário.")
        });
    };

});

ctrl.controller('CargosCtrl', function($scope, $routeParams, CargoService) {

    $scope.cargos = CargoService.listar();

    $scope.gravar = function (cargo) {
        CargoService.salvar(cargo, function(data){
            alert(data);
            //location.reload();
        }, function(erro){
            if (erro.status == 500){
                alert(erro.data)
            } else {
                alert(erro);
            };
        });
    };

    $scope.editar = function (cargo) {
        var retorno = CargoService.editar(cargo);
        location.reload();
        return retorno;
    };

    $scope.remover = function (cargo) {
        CargoService.apagar(cargo, function(data){
            alert(data);
            location.reload();
        }, function(erro){
            if (erro.status == 500){
               alert("Falha ao remover. \nExiste usuário cadastrado com este cargo.")
            };
        });

    };

});

ctrl.controller('PerfisCtrl', function($scope, $routeParams, PerfilService) {

    $scope.perfis = PerfilService.listar();
    $scope.perfisOriginais = angular.copy($scope.perfis);

    $scope.gravar = function (perfil) {
        var retorno = PerfilService.salvar(perfil);
        location.reload();
        return retorno;
    };

    $scope.editar = function (perfil) {
        var retorno = PerfilService.editar(perfil);
        location.reload();
        return retorno;
    };

    $scope.remover = function (perfil) {
        var retorno =  PerfilService.apagar(perfil);
        location.reload();
        return retorno;
    };

    $scope.resetEdit = function(perfil) {
        perfil.nome = $scope.perfisOriginais.nome;
    }


});

ctrl.controller('UsuarioCtrl', function($scope, $routeParams, $location, UsuarioService, CargoService, PerfilService) {

    if ($routeParams.id == 0){
        $scope.usuario = {
            "nome": "",
            "cpf": "",
            "dataNascimento": "",
            "sexo": "",
            "cargo": {},
            "perfis": []
        };
    } else {
        $scope.usuario = UsuarioService.buscar($routeParams);
    }

    $scope.cargos = CargoService.listar();
    $scope.perfis = PerfilService.listar();

    $scope.existePerfil = function(perfil) {
        var existe = -1;
        var i;
        if ($scope.usuario.perfis != undefined) {
            for (i = 0; i < $scope.usuario.perfis.length; i++) {
                if ($scope.usuario.perfis[i].nome == perfil.nome) {
                    existe = i;
                }
            }
        }
        return existe
    };

    $scope.mudaPerfil = function(perfil) {
        var i = $scope.existePerfil(perfil);
        if(i >= 0){
            $scope.usuario.perfis.splice(i, 1);
        } else {
            $scope.usuario.perfis.push(perfil);
        }
    };

    $scope.comparaSexo = function(sexo) {
        var igual = false;
        if ($scope.usuario.sexo === sexo){
            igual = true;
        }
        return igual;
    };

    $scope.gravar = function (usuario) {
        UsuarioService.salvar(usuario);
        $location.url('/usuarios');
    };

    $scope.reset = function () {
        if ($routeParams.id == 0){
            $scope.usuario = {
                "nome": "",
                "cpf": "",
                "dataNascimento": "",
                "sexo": "",
                "cargo": {},
                "perfis": []
            };
        } else {
            $scope.usuario = UsuarioService.buscar($routeParams);
        }
    };



});






