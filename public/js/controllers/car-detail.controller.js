angular.module('CarDetailCtrl', [])
.controller('CarDetailController', ['$scope', '$routeParams', 'CarFactory', function($scope, $routeParams, CarFactory) {

    showCar();
    function showCar() {
        CarFactory.showCar($routeParams.id).then(function(response) {
            $scope.car = response.data;
        }).catch(function(response) {
            console.log(response);
        });
    }

}]);