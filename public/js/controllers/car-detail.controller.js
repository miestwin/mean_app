angular.module('CarDetailCtrl', [])
.controller('CarDetailController', ['$scope', '$routeParams', 'CarFactory', 'EquipmentFactory', function($scope, $routeParams, CarFactory, EquipmentFactory) {

    showCar();
    showEquipments();

    function showCar() {
        CarFactory.showCar($routeParams.id).then(function(response) {
            $scope.car = response.data;
        }).catch(function(response) {
            console.log(response);
        });
    }

    function showEquipments() {
        EquipmentFactory.getEquipments().then(function(response) {
            $scope.equipments = response.data;
        }).catch(function(response) {
            console.log(response);
        });
    }

}]);