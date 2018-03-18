angular.module('todolist')
    .controller('TodoCtrl', function ($scope, $http) {
        $http({method: 'GET', url: 'src/todos/todos.json'}).
        then(function success(response) {
            $scope.items=response.data.todos;
        });

        let itemStatus = '';
        $scope.addTodo = function () {
            let newItem = {name: $scope.todoName, complited: false, date: Date.now(), status: 'new'};
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
        $scope.selectedPeriod = { id: 0, name: 'today' };

        $scope.statusFilter = function (item) {
            if(item.status.match(itemStatus)){
                return item;
            }
        };

        $scope.filterDate = function (item) {
            if(item.date >= $scope.selectedPeriod.id){
                return item
            }
        };

        $scope.changeFilter = function (query) {
            itemStatus = query;
        };

        $scope.sortField = undefined;
        $scope.reverse = false;
        $scope.orderByQuery = function (query) {
            if($scope.sortField === query){
                $scope.reverse = !$scope.reverse;
            } else {
                $scope.sortField = query;
                $scope.reverse = false;
            }
        };

        $scope.options = [
            { id: Date.now() - 5*86400000, name: '5 days' },
            { id: Date.now() - 10*86400000, name: '10 days' },
            { id: Date.now() - 15*86400000, name: '15 days' },
            { id: Date.now() - 20*86400000, name: '20 days'}
        ];
    });