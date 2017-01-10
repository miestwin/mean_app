angular.module('CarCreateCtrl', [])
.controller('CarCreateController', ['$scope', '$location', 'CarFactory', 'EquipmentFactory', function($scope, $location, CarFactory, EquipmentFactory) {
    $scope.car = { equipment: [] };
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
            $scope.eq = $scope.equipments[0];
        }).catch(function(response) {
            console.log(response);
        });
    }

    $scope.removeTheEquipmentFromTheCar = function removeTheEquipmentFromTheCar(equipment) {
        var index = $scope.car.equipment.indexOf(equipment);
        $scope.car.equipment.splice(index, 1);
    };

    $scope.addTheEquipmentToTheCar = function addTheEquipmentToTheCar() {
        if($scope.car.equipment.indexOf($scope.eq) === -1) {
            $scope.car.equipment.push($scope.eq);
        }
    };

    $scope.create = function create() {
        var car = $scope.car;
        var eq = car.equipment.map(item => item._id);
        car.equipment = eq;
        CarFactory.createCar(car).then(function(response) {
            $location.path('/cars');
        }).catch(function(response) {
            console.log(response);
        });
    };

}]);