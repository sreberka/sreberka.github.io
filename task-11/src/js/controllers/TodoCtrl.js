const todoContr = angular.module('todolist');
todoContr.controller('TodoCtrl', function ($scope, Todos, $routeParams) {
        $scope.items = Todos.query();
        let itemStatus = '';
        $routeParams.status = itemStatus;
        $scope.validInput = true;
        $scope.addTodo = function () {
            if($scope.todoName.length > 20){
                let newItem = {name: $scope.todoName, complited: false, date: Date.now(), status: 'new', editing: false};
                $scope.items.push(newItem);
                $scope.todoName = '';
                $scope.validInput = true;
            }
            else{
                $scope.validInput = false;
            }
        };

        $scope.changeStatus = function (item) {
            item.complited = !item.complited;
            if(item.complited){
                item.status = 'complited';
            } else {
                item.status = 'new';
            }
        };
        $scope.selectedPeriod = { date: 0, name: 'today' };

        $scope.statusFilter = function (item) {
            if(item.status.match(itemStatus)){
                return item;
            }
        };

        $scope.filterDate = function (item) {
            if(item.date >= $scope.selectedPeriod.date){
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
            { date: Date.now() - 5*86400000, name: '5 days' },
            { date: Date.now() - 10*86400000, name: '10 days' },
            { date: Date.now() - 15*86400000, name: '15 days' },
            { date: Date.now() - 20*86400000, name: '20 days'}
        ];
        
        $scope.editName = function (item) {
            item.editing = !item.editing;
        }

    });

todoContr.controller('TodoCtrlNew', function ($scope, Todos, $route, $routeParams, $location){

});

todoContr.controller('TodoCtrlComplited', function ($scope, Todos, $route, $routeParams, $location){

});