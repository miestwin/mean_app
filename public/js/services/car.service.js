angular.module('CarService', []).factory('Car', ['$http', function($http) {
    return {
        get : function() {
            return $http.get('/cars');
        }
    };
}]);