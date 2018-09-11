angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.adding = false; // boolean value to show form when button is clicked
    $scope.form = {};

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      $scope.listings.push($scope.form);  // push listing to listings
      $scope.form = {}  // clear form
      $scope.adding = !$scope.adding; // change val of bool adding back upon submit
    };
    $scope.deleteListing = function(index) {
      $scope.listings.splice($scope.listings.indexOf(index), 1); // remove indexth element of listings    
    };
    $scope.showDetails = function(listing) {
      $scope.detailedInfo = listing;  // pull listing into detailedInfo
    };
    $scope.onClick = function() {
      $scope.adding = !$scope.adding; // change val of bool adding
    };
  }
]);