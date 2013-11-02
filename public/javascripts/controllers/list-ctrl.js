TodoList.controller('ListCtrl', ['$scope', '$http', function ($scope, $http) {

  $scope.loadListItems = function () {
    $http.get('list-items').success($scope.receiveListItems);
  };

  $scope.receiveListItems = function (listItems) {
    $scope.listItems = listItems;
  };

  $scope.loadListItems();

}]);