angular.module('indiegram', ['ui.router','templates'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/_home.html',
        controller: 'MainCtrl',
        // ensuring that anytime our home state is entered
        // we will automatically query all posts from our 
        // backend before state finishes loading
        resolve: {
          postPromise: ['posts', function(posts) {
            return posts.getAll();
          }]
        }
      })
      .state('posts', {
        url: 'posts/{id}',
        templateUrl: 'posts/posts.html',
        controller: 'PostsCtrl',
        resolve: {
          post: ['$stateParams', 'posts', function($stateParams, posts) {
            return posts.get($stateParams.id);
          }]
        }
      });

    $urlRouterProvider.otherwise('home');
  }])