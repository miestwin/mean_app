angular.module('CarCreateCtrl', [])
.controller('CarCreateController', ['$scope', '$location', 'CarFactory', function($scope, $location, CarFactory) {

    $scope.create = function create() {
        CarFactory.createCar($scope.car).then(function(response) {
            $location.path('/cars');
        }).catch(function(response) {
            console.log(response);
        });
    };

}]);