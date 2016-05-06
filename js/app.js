/**
 * Created by breno on 25/04/16.
 */

var app = angular.module('app', ['ngRoute', 'ctrl', 'serv']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider) {
    $routeProvider
        .when('/usuarios', {
            templateUrl: 'view/usuarios.html',
            controller: 'UsuariosCtrl',
            controllerAs: 'usuarios'
        })
        .when('/usuarios/usuario', {
            templateUrl: 'view/usuario.html',
            controller: 'UsuarioCtrl',
            controllerAs: 'usuario'
        })
        .when('/cargos', {
            templateUrl: 'view/cargos.html',
            controller: 'CargosCtrl',
            controllerAs: 'cargos'
        })
        .when('/perfis', {
            templateUrl: 'view/perfis.html',
            controller: 'PerfisCtrl',
            controllerAs: 'perfis'
        });
}]);