angular.module('CarService', []).factory('Cars', ['$http', function($http) {
    return {
        get: function() {
            return $http.get('/cars');
        }
    };
}]);