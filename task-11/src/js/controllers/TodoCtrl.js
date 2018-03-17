angular.module('todolist')
    .controller('TodoCtrl', function ($scope) {
        $scope.today = new Date();

        $scope.items = [];

        $scope.addTodo = function () {
            let newItem = {name: $scope.todoName, complited: false};
            $scope.items.push(newItem);
            $scope.todoName = '';
        };

        $scope.changeStatus = function (item) {
            item.complited = !item.complited;
            console.log(item.complited);
        }
    });