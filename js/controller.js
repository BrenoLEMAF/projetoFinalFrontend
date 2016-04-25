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

        //$locationProvider.html5Mode(true);
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

app.controller('UsuariosCtrl', ['$routeParams', function($routeParams) {
    this.name = "UsuariosCtrl";
    this.params = $routeParams;
}]);

app.controller('CargosCtrl', ['$routeParams', function($routeParams) {
    this.name = "CargosCtrl";
    this.params = $routeParams;
}]);

app.controller('PerfisCtrl', ['$routeParams', function($routeParams) {
    this.name = "PerfisCtrl";
    this.params = $routeParams;
}]);




