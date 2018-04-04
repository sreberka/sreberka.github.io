const articleApp = angular.module('articlelist', ['ngRoute','ngResource']);

articleApp.factory('Articles', [
    '$resource', function ($resource) {
        return $resource('src/articles/articles.json', {})
    }
]);

articleApp.run(function ($rootScope, Articles) {
    $rootScope.items = Articles.query();
});

articleApp.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $routeProvider.when('/', {
        templateUrl: 'src/templates/main.html',
        controller : 'ArticleCtrl',
        reloadOnSearch: true
    }).when('/add', {
        templateUrl: 'src/templates/add.html',
        controller : 'AddArticleCtrl',
        reloadOnSearch: true
    }).when('/:id/edit', {
        templateUrl: 'src/templates/edit.html',
        controller : 'EditArticleCtrl',
        reloadOnSearch: true
    }).otherwise({
        redirectTo: '/'
    });
});

articleApp.filter('startFrom', function(){
    return function(input, start){
        start = +start;
        return input.slice(start);
    }
});