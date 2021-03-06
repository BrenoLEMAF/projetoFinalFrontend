'use strict';

/* Controllers */

var ctrl = angular.module('ctrl', []);

ctrl.controller('PillsCtrl', function($scope, $location) {

    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});

ctrl.controller('UsuariosCtrl', function($scope, $routeParams, UsuarioService) {

    $scope.usuarios = UsuarioService.query();

    $scope.remover = function (id) {
        UsuarioService.delete({id: id}, function(){
            location.reload();
        }, function(erro){
            alert(erro.data);
        });
    };

});

ctrl.controller('CargosCtrl', function($scope, $routeParams, CargoService) {

    $scope.cargos = CargoService.query();

    $scope.gravar = function (cargo) {
        CargoService.save(cargo, function(){
            location.reload();
        }, function(erro){
            alert(erro.data);
        });
    };

    $scope.editar = function (cargo) {
        CargoService.put(cargo, function(){
            location.reload();
        }, function(erro){
            alert(erro.data);
            location.reload();
        });
    };

    $scope.remover = function (id) {
        CargoService.delete({id: id}, function(){
            location.reload();
        }, function(erro){
            alert(erro.data);
        });
    };

});

ctrl.controller('PerfisCtrl', function($scope, $routeParams, PerfilService) {

    $scope.perfis = PerfilService.query();
    $scope.perfisOriginais = angular.copy($scope.perfis);

    $scope.gravar = function (perfil) {
        PerfilService.save(perfil, function(){
            location.reload();
        }, function(erro){
            alert(erro.data);
        });

    };

    $scope.editar = function (perfil) {
        PerfilService.put(perfil, function(){
            location.reload();
        }, function(erro){
            alert(erro.data);
            location.reload();
        });
    };

    $scope.remover = function (id) {
        PerfilService.delete({id: id}, function(){
            location.reload();
        }, function(erro){
            alert(erro.data);
        });
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
        $scope.usuario = UsuarioService.get($routeParams, function(){}, function(erro){
            alert(erro.data);
        });
    }

    $scope.cargos = CargoService.query();
    $scope.perfis = PerfilService.query();

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
        UsuarioService.save(usuario, function(){
            $location.url('/usuarios');
        }, function(erro){
            alert(erro.data);
        });
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
            $scope.usuario = UsuarioService.get($routeParams, function(){}, function(erro){
                alert(erro.data);
            });
        }
    };
});






