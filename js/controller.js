'use strict';

/* Controllers */

var app = angular.module('app', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/usuarios', {
                templateUrl: 'usuarios.html',
                controller: 'UsuariosCtrl',
                controllerAs: 'usuarios'
            })
            .when('/usuarios/novo', {
                templateUrl: 'novoUsuario.html',
                controller: 'AddUsuariosCtrl',
                controllerAs: 'novo'
            })
            .when('/cargos', {
                templateUrl: 'cargos.html',
                controller: 'CargosCtrl',
                controllerAs: 'cargos'
            })
            .when('/perfis', {
                templateUrl: 'perfis.html',
                controller: 'PerfisCtrl',
                controllerAs: 'perfis'
            });
    }]);

app.controller('PillsCtrl', function($scope, $location) {
    $scope.pills = [
        {name: 'Usuários',
            url: '#usuarios' },
        {name: 'Cargos',
            url: '#cargos' },
        {name: 'Perfis',
            url: '#perfis' }
    ];

    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

});

app.controller('UsuariosCtrl', function($scope, $routeParams) {

    $scope.usuarios = [
        {nome: 'Breno Rios Zeymer', cpf: '12345678998', dataNasc: '14/11/1984', sexo: 'M', cargo: 'Presidente', perfis: "Perfil A, Perfil B", id: '1' },
        {nome: 'Raphael Rios Zeymer', cpf: '98765432187', dataNasc: '04/07/1990', sexo: 'M', cargo: 'Diretor', perfis: "Perfil B, Perfil C", id: '2' },
        {nome: 'Maria Tereza Pereira Rios', cpf: '11111111111', dataNasc: '11/11/1954', sexo: 'F', cargo: 'Supervisor', perfis: "Perfil C, Perfil F", id: '3' },
        {nome: 'Fulano da Silva Sauro', cpf: '22222222222', dataNasc: '01/01/1960', sexo: 'M', cargo: 'Diretor', perfis: "Perfil E, Perfil F", id: '4' },
        {nome: 'Ciclano de Almeida Gomes', cpf: '33333333333', dataNasc: '05/07/2001', sexo: 'M', cargo: 'Supervisor', perfis: "Perfil A, Perfil D", id: '5' }
    ];

    this.name = "UsuariosCtrl";
    this.params = $routeParams;
});

app.controller('AddUsuariosCtrl', ['$routeParams', function($routeParams) {
    this.name = "AddUsuariosCtrl";
    this.params = $routeParams;
}]);

app.controller('CargosCtrl', function($scope, $routeParams) {

    $scope.cargos = [
        {nome: 'Presidente', id: '1' },
        {nome: 'Gerente', id: '2' },
        {nome: 'Supervisor', id: '3' }
    ];

    this.name = "CargosCtrl";
    this.params = $routeParams;
});

app.controller('PerfisCtrl', function($scope, $routeParams) {

    $scope.perfis = [
        {nome: 'Perfil A', id: '1' },
        {nome: 'Perfil B', id: '2' },
        {nome: 'Perfil C', id: '3' },
        {nome: 'Perfil D', id: '4' },
        {nome: 'Perfil E', id: '5' },
        {nome: 'Perfil F', id: '6' },
    ];

    this.name = "PerfisCtrl";
    this.params = $routeParams;
});




