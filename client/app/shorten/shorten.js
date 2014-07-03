angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.loading = false;
  console.log($location.$$absUrl);

  $scope.addLink = function(){
    Links.addLink()
      .then(function(){

      })
      .catch(function(error){
        throw error;
      });
  };

});
