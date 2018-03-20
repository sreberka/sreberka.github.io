todoApp.controller('TodoCtrl', function ($scope, Todos, $location, $routeParams) {
        $scope.items = Todos.query();

        let itemStatus = '';
        $scope.validInput = true;
        $scope.addTodo = function () {
            if(this.todoName.length > 20){
                let newItem = {id: Date.now(),name: this.todoName, complited: false, date: Date.now(), status: 'new', editing: false};
                $scope.items.push(newItem);
                this.todoName = '';
                $scope.validInput = true;
                $location.path('/');
            }
            else{
                $scope.validInput = false;
            }
        };

        // Edit
        $scope.editingTodo = function (item) {
            if(item.editing === true) {
                return item
            }
        };

        $scope.editName = function (item) {
            item.editing = !item.editing;
        };

        // Todo status
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

        // Filter by selected date
        $scope.selectedPeriod = { date: 0, name: 'today' };

        $scope.filterDate = function (item) {
            if(item.date >= $scope.selectedPeriod.date){
                return item;
            }
        };

        $scope.options = [
            { date: Date.now() - 5*86400000, name: '5 days' },
            { date: Date.now() - 10*86400000, name: '10 days' },
            { date: Date.now() - 15*86400000, name: '15 days' },
            { date: Date.now() - 20*86400000, name: '20 days'}
        ];


        //Sorting by name and date
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
    });