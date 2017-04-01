angular.module('CarDetailCtrl', [])
.controller('CarDetailController', ['$scope', '$routeParams', '$location', 'CarFactory', 'EquipmentFactory', function($scope, $routeParams, $location, CarFactory, EquipmentFactory) {

    showCar();
    showEquipments();

    function showCar() {
        CarFactory.showCar($routeParams.id).then(function(response) {
            var car = response.data;
            car.data_of_production = new Date(car.data_of_production);
            $scope.car = car;
        }).catch(function(response) {
            $location.path('/go-to-the-error');
            console.log(response);
        });
    }

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

    $scope.addTheEquipmentToTheCar = function addTheEquipmentToTheCar(event) {
        if($scope.car.equipment.indexOf($scope.eq) === -1) {
            $scope.car.equipment.push($scope.eq);
        }
        event.preventDefault();
    };

    $scope.update = function update() {
        var car = $scope.car;
        car.data_of_production = car.data_of_production || new Date(Date.now());
        var eq = car.equipment.map(item => item._id);
        car.equipment = eq;
        CarFactory.updateCar(car).then(function(response) {
            $location.path('/cars');
        }).catch(function(response) {
            $location.path('/go-to-the-error');
            console.log(response);
        });
    };

    $scope.create = function create() {
        $location.path('/car/new');
    };

}]);