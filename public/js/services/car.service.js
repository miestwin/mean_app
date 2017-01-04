angular.module('CarService', []).factory('CarFactory', ['$http', function($http) {
    var CarDataOp = {};

    CarDataOp.getCars = function() {
        return $http.get('/cars');
    };

    return CarDataOp;
}]);