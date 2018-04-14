articleApp.controller('EditArticleCtrl', function ($scope) {
    $scope.editingTodo = function (item) {
        if(item.editing === true) {
            return item
        }
    };
});