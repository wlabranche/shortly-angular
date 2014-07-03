angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.loading = false;

  $scope.addLink = function(){
    for (var key in $scope.link){
      console.log(key, $scope.link[key]);
    }

    Links.addLink($scope.link)
      .then(function(req){
        //what do we do here?
        console.log('aaa', req);
        $location.path('/links');
      })
      .catch(function(error){
        console.log('shorten error ' + error.data);
        throw error;
      });
  };

});
