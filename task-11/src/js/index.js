const todoApp = angular.module('todolist', ['ngRoute','ngResource']);

todoApp.factory('Todos', [
    '$resource', function ($resource) {
        return $resource('src/todos/todos.json', {})
    }
]);

todoApp.config(function ($routeProvider) {
    const routeConfig = {
        controller: 'TodoCtrl',
        templateUrl: 'index.html'
    };

    $routeProvider
        .when('/', routeConfig)
        .when('/:status', routeConfig)
        .otherwise({
            redirectTo: '/'
        });
});
