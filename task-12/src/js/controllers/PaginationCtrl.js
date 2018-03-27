// articleApp.controller('paginationCtrl', function($scope, $rootScope){
//     $scope.currentPage = 0;
//     $scope.itemsPerPage = 5;
//     $scope.items = $rootScope.items;
//
//     $scope.firstPage = function() {
//         return $scope.currentPage == 0;
//     }
//     $scope.lastPage = function() {
//         var lastPageNum = Math.ceil($scope.items.length / $scope.itemsPerPage - 1);
//         return $scope.currentPage == lastPageNum;
//     }
//     $scope.numberOfPages = function(){
//         return Math.ceil($scope.items.length / $scope.itemsPerPage);
//     }
//     $scope.startingItem = function() {
//         return $scope.currentPage * $scope.itemsPerPage;
//     }
//     $scope.pageBack = function() {
//         $scope.currentPage = $scope.currentPage - 1;
//     }
//     $scope.pageForward = function() {
//         $scope.currentPage = $scope.currentPage + 1;
//     }
// });