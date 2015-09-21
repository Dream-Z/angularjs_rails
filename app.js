/**
 * Created by lexx on 9/21/15.
 */

angular.module('flapperNews', [])
    .controller('MainCtrl', [
        '$scope',
        function($scope){
            $scope.test = 'Hello world!';

            $scope.posts = [
                { title: 'post1', upvotes: 5 },
                { title: 'post2', upvotes: 2 },
                { title: 'post3', upvotes: 15 },
                { title: 'post4', upvotes: 9 },
                { title: 'post5', upvotes: 4 },
                { title: 'post6', upvotes: 51 }
            ];

            $scope.addPost = function(){
                if(!$scope.title || $scope.title === '') { return; }
                $scope.posts.push({
                    title: $scope.title,
                    link: $scope.link,
                    upvotes: Math.round(Math.random()*10)
                });
                $scope.title = '';
                $scope.link = '';
            };

            $scope.incrementUpvotes = function(post){
              post.upvotes += 1;
            };
        }
    ]
);