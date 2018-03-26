articleApp.controller('AddArticleCtrl', function ($scope, $rootScope, $location) {
    $scope.validInput = true;
    $scope.addTodo = function () {
        if(this.todoName.length > 20){
            let newItem = {
                id: Date.now(),
                name: this.todoName,
                completed: false,
                date: Date.now(),
                status: 'new',
                editing: false
            };
            $rootScope.items.push(newItem);
            this.todoName = '';
            $scope.validInput = true;
            $location.path('/');
        }
        else{
            $scope.validInput = false;
        }
    };
});