angular.module('EquipmentService', []).factory('EquipmentFactory', ['$http', function($http) {
    var EquipmentDataOp = {};

    EquipmentDataOp.getEquipments = function() {
        return $http.get('/equipments');
    };
    
    return EquipmentDataOp;
}]);