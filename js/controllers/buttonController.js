let ButtonController = function ($scope) {
  $scope.count = '';
  $scope.likes = "Like Me";

  $scope.likeButton = function () {
    $scope.count++;
    $scope.likes = ($scope.count === 1) ? 'like' : 'likes';
  };
};


ButtonController.$inject = ['$scope'];
export default ButtonController;

