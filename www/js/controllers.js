angular.module('infinite-fire.controllers', ['firebase'])

.controller('ContactsCtrl', function($scope, $firebaseArray) {

  // create a connection to Firebase
  var baseRef = new Firebase('https://webapi.firebaseio.com/rolodex');
  // create a scrollable reference
  var scrollRef = new Firebase.util.Scroll(baseRef, 'name');

  // create a synchronized array on scope
  $scope.items = $firebaseArray(scrollRef);
  // load the first three contacts
  scrollRef.scroll.next(3);

  // This function is called whenever the user reaches the bottom
  $scope.loadMore = function() {
    // load the next contact
    scrollRef.scroll.next(1);
    $scope.$broadcast('scroll.infiniteScrollComplete');
  };

});
