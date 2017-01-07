angular.module('CarCreateCtrl', [])
.controller('CarCreateController', ['$scope', '$location', 'CarFactory', 'EquipmentFactory', function($scope, $location, CarFactory, EquipmentFactory) {

    showEquipments();

    $scope.create = function create() {
        CarFactory.createCar($scope.car).then(function(response) {
            $location.path('/cars');
        }).catch(function(response) {
            console.log(response);
        });
    };

    function showEquipments() {
        EquipmentFactory.getEquipments().then(function(response) {
            $scope.equipments = response.data;
        }).catch(function(response) {
            console.log(response);
        });
    }

}]);