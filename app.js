var app = angular.module('flapperNews',[]);

app.factory('posts',[ function(){
    var o = {
        posts:[]
        
    }; 
    return o;
    
}]),

app.controller('MainCtrl', [
    '$scope',
    'posts',
    function($scope,posts){
        $scope.posts = posts.posts;
        
/*
   function($scope) {
       $scope.posts = [
  {title: 'post 1', upvotes: 5},
  {title: 'post 2', upvotes: 2},
  {title: 'post 3', upvotes: 15},
  {title: 'post 4', upvotes: 9},
  {title: 'post 5', upvotes: 4}
  ]*/
   $scope.addPost = function(){
       if(!$scope.name || $scope.name ===''){ return;}
        $scope.posts.push({
            name: $scope.name,
            surName: $scope.surName,
            upvotes: 0
            });
        $scope.name ='';
        $scope.surName = '';
     },
     $scope.incrementUpvotes = function(post) {
         post.upvote +=1;
     }
 
    }]);
    
