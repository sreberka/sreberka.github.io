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
        reloadOnSearch: false
    }).when('/add', {
        templateUrl: 'src/templates/add.html',
        controller : 'AddArticleCtrl',
        reloadOnSearch: false
    }).when('/edit/:id', {
        templateUrl: 'src/templates/edit.html',
        controller : 'EditArticleCtrl',
        reloadOnSearch: false
    }).otherwise({
        redirectTo: '/'
    });
});
