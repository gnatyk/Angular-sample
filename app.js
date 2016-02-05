var app = angular.module('newsApp', ['ui.router']);

app.factory('posts', [function () {
    var o = {
        posts: []

    };
    return o;

}]),
app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'pages/home.html',
                controller: 'MainCtrl'
            })
            .state('friends', {
                url: '/friends',
                templateUrl: 'pages/friends.html',
                controller: 'FriendsCtrl'
            })
            .state('profile', {
                url: '/profile',
                templateUrl: 'pages/profile.html',
                controller: 'ProfileCtrl'
            })
            .state('messages', {
                url: '/messages',
                templateUrl: 'pages/messages.html',
                controller: 'MessaggesCtrl'
            })
            .state('registrarion', {
                url: '/registration',
                templateUrl: 'pages/registration.html',
                controller: 'RegistrationCtrl'
            });

        $urlRouterProvider.otherwise('/');
    }
])
app.controller('RegistrationCtrl', [
    '$scope',
    'posts',
    function ($scope, posts) {

    }
])

app.controller('ProfileCtrl', [
    '$scope',
    'posts',
    function ($scope, posts) {

    }
])

app.controller('MessagesCtrl', [
    '$scope',
    'posts',
    function ($scope, posts) { }

])
app.controller('MainCtrl', [
    '$scope',
    'posts',
    function ($scope, posts) {
    }]);

app.controller('FriendsCtrl', [
    '$scope',
    'posts',
    function ($scope, posts) {
        $scope.posts = posts.posts;
        $scope.addPost = function () {
            if (!$scope.name || $scope.name === '') { return; }
            $scope.posts.push({
                name: $scope.name,
                surName: $scope.surName,
                upvotes: 0
            });
            $scope.name = '';
            $scope.surName = '';
        },
        $scope.incrementUpvotes = function (post) {
            post.upvote += 1;
        }

    }]);
    
