angular.module('starter.controllers', ['firebase'])

.controller('ContactsCtrl', function($scope, $firebaseArray) {

  var baseRef = new Firebase('https://webapi.firebaseio.com/rolodex');
  var scrollRef = new Firebase.util.Scroll(baseRef, 'name');

  $scope.items = $firebaseArray(scrollRef);
  scrollRef.scroll.next(3);

  $scope.loadMore = function() {
    scrollRef.scroll.next(1);
    $scope.$broadcast('scroll.infiniteScrollComplete');
  };

});
