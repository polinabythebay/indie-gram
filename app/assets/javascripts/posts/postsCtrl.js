angular.module('indiegram')
  .controller('PostsCtrl', [
    '$scope',
    'posts',
    'post',
    function($scope, $stateParams, posts, post) {

      $scope.post = post;

      $scope.addComment = function() {
        if($scope.body === '') {
          return;
        }

        $scope.post.comments.push({
          body: $scope.body,
          author: 'user',
          upvotes: 0
        });
        $scope.body = '';
      };
    }])