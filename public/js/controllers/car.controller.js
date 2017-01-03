angular.module('CarCtrl', []).controller('CarController', ['$scope', '$http', function($scope, $http) {
    $http.get('/cars').then(function(data) {
        if(data.status === 200) {
            $scope.cars = data.data;
        }
    });
}]);