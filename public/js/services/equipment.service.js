angular.module('EquipmentService', []).factory('Equipment', ['$http', function($http) {
    return {
        get : function() {
            return $http.get('/equipments');
        }
    };
}]);