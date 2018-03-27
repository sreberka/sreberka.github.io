articleApp.controller('ArticleCtrl', function ($scope, $rootScope) {
        $scope.sumOfArticles = $rootScope.items.length;

        $scope.editName = function (item) {
            item.editing = !item.editing;
        };
    });
