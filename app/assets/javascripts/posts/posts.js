angular.module('indiegram')
  .factory('posts', ['$http', function($http) {

    var service = {
      posts: []
    };

    service.upvote = function(post) {
      return $http.put('/posts/'+ post.id + '/upvote.json').then(function(response) {
        post.upvotes += 1;
      });
    };

    service.getAll = function() {
      return $http.get('/posts.json').then(function(response) {
        angular.copy(response, service.posts);
      });
    };

    service.create = function(post) {
      return $http.post('/posts.json', post).then(function(response) {
        service.posts.push(response);
      });
    };

    service.get = function(id) {
      return $http.get('/posts/'+ id + '.json').then(function(response) {
        return response.data;
      });
    };

    return service;  
  }]);