const todoApp = angular.module('todolist', ['ngRoute','ngResource']);

todoApp.factory('Todos', [
    '$resource', function ($resource) {
        return $resource('src/todos/todos.json', {})
    }
]);

todoApp.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $routeProvider.when('/', {
        templateUrl: 'src/templates/main.html'
    }).when('/add', {
        templateUrl: 'src/templates/add.html'
    }).when('/edit/:id', {
        templateUrl: 'src/templates/edit.html'
    }).otherwise({
        redirectTo: '/'
    });
});
