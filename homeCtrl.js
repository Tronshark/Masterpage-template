angular.module('app').controller('homeCtrl', [
  '$scope',
  'Friends',
  function ($scope, Friends) {
    $scope.title = 'About'
    Friends.get().then(function (data) {
      $scope.friends = data
    })
    $scope.items = [
      'About',
      'Dashboard',
      'Skills',
      'Experience',
      'Interests',
      'Contact'
    ]
    $scope.selectedValue = 'About'

    $scope.save = function () {
      $http.post('/api/friends', friends)
    }
  }
])
