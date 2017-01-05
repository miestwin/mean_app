angular.module('EquipmentService', []).factory('EquipmentFactory', ['$http', function($http) {
    var EquipmentDataOp = {};

    EquipmentDataOp.getEquipments = function() {
        return $http.get('/equipments');
    };

    EquipmentDataOp.createEquipment = function(param) {
        return $http.post('/equipments', param);
    };

    EquipmentDataOp.updateEquipment = function(param) {
        return $http.put('/equipments/' + param._id, param);
    };

    EquipmentDataOp.showEquipment = function(param) {
        return $http.get('/equipments/' + param);
    };
    
    return EquipmentDataOp;
}]);