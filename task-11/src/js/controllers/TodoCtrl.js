angular.module('todolist')
    .controller('TodoCtrl', function ($scope) {
        $scope.items = [];
        let itemStatus = '';
        $scope.addTodo = function () {
            let newItem = {name: $scope.todoName, complited: false, date: new Date(), status: 'new'};
            $scope.items.push(newItem);
            $scope.todoName = '';
        };

        $scope.changeStatus = function (item) {
            item.complited = !item.complited;
            if(item.complited){
                item.status = 'complited';
            } else {
                item.status = 'new';
            }
        };

        $scope.statusFilter = function (item) {
            if(item.status.match(itemStatus)){
                return item;
            }
        };

        $scope.changeFilter = function (query) {
            itemStatus = query;
        };
    });