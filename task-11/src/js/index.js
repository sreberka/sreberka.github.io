const todoApp = angular.module('todolist', ['ngRoute','ngResource']);

todoApp.factory('Todos', [
    '$resource', function ($resource) {
        return $resource('src/todos/todos.json', {})
    }
]);

todoApp.run(function ($rootScope, Todos) {
    $rootScope.items = Todos.query();
});

todoApp.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $routeProvider.when('/', {
        templateUrl: 'src/templates/main.html',
        controller : 'TodoCtrl',
        reloadOnSearch: false
    }).when('/add', {
        templateUrl: 'src/templates/add.html',
        controller : 'TodoCtrl',
        reloadOnSearch: false
    }).when('/edit/:id', {
        templateUrl: 'src/templates/edit.html',
        controller : 'TodoCtrl',
        reloadOnSearch: false
    }).otherwise({
        redirectTo: '/'
    });
});
