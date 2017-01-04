angular.module('CarService', []).factory('CarFactory', ['$http', function($http) {
    var CarDataOp = {};

    CarDataOp.getCars = function() {
        return $http.get('/cars');
    };

    CarDataOp.deleteCar = function(param) {
        return $http.delete('/cars/' + param);
    };

    CarDataOp.showCar = function(param) {
        return $http.get('/cars/' + param);
    }

    return CarDataOp;
}]);