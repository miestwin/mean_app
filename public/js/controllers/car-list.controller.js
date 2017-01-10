angular.module('CarListCtrl', [])
.controller('CarListController', ['$scope', '$location', 'CarFactory', function($scope, $location, CarFactory) {
    
    $scope.brandTypes = {
        audi: false,
        bmw: false,
        volkswagen: false,
        fiat: false
    };

    $scope.bodyTypes = {
        van: false,
        coupe: false,
        limousine: false
    };

    $scope.minEngineRange = 0;
    $scope.maxEngineRange = 10;

    getCars();
    function getCars() {
        CarFactory.getCars().then(function (response) {
            if(response.status === 200) {
                $scope.cars = response.data;
            }
        });
    }

    $scope.deleteCar = function deleteCar(event, index) {
        var car = $scope.cars[index];
        CarFactory.deleteCar(car._id).then(function (response) {
            $scope.cars.splice(index, 1);
        }).catch(function(response) {
            console.log(response);
        });
        event.stopPropagation();
    }

    $scope.showCar = function showCar(index) {
        var car = $scope.cars[index];
        $location.path('/car/' + car._id);
    };

    $scope.createCar = function createCar() {
        $location.path('/car/new');
    };

}]);