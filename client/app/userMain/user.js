'use strict';

angular.module('myApp.user', ['ngRoute', 'myApp.services'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/user', {
    templateUrl: 'userMain/user.html',
    controller: 'UserCtrl',
    resolve: UserCtrl.resolve
  });
}]);

//This controller function is actually added at the bottom. This lets us play a bit
//This lets us add a resolve method in a somewhat reasonable manner.
function UserCtrl($scope, UserFactory) {
  $scope.userData = UserFactory.userData;
  $scope.allPreferences = UserFactory.allPreferences;
  console.log("userData in ctrl: ", $scope.userData);
  console.log("allPreferences in ctrl: ", $scope.allPreferences);
  //TODO: remove dummy data and refactor view so it works n shit
  //TODO: consider using watchers instead of somewhat hackily
  $scope.userData.profileImg = "http://vignette3.wikia.nocookie.net/60seconds/images/0/02/Filepicker-cu8RtvHTyLM2781g44RQ_YOLO.jpg/revision/latest?cb=20150918035211";
  $scope.userData.username = "David";
  $scope.userData.userItems = [];
  $scope.userData.userItems[0] = {name: "Venti Mocha Latte", url: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/200px-Starbucks_Corporation_Logo_2011.svg.png", price: 4.99, merchant: "Starbucks", description: "Large delicious latte from Starbucks"};
  $scope.userData.userItems[1] = {name: "Large Cheese Pizza", url: "http://www.blogcdn.com/www.dailyfinance.com/media/2013/01/dominoes-pizza-1040-cs010213.jpg", price: 9.99, merchant: "Dominos", description: "Delicious cheese pizza from Dominos"};
  $scope.addItem = function(item) {
    console.log(item);
  }; 
  $scope.removeItem = function(item) {
    console.log(item);
  };
}
UserCtrl.resolve = {
  resolver: function(UserFactory){
    return UserFactory.resolver();
  }
};

//this is the usual stuff
angular.module('myApp.user').controller('UserCtrl', ['$scope', 'UserFactory', UserCtrl]);