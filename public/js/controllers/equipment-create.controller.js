angular.module('EquipmentCreateCtrl', [])
.controller('EquipmentCreateController', ['$scope', '$location', 'EquipmentFactory', function($scope, $location, EquipmentFactory) {

    $scope.create = function create() {
        EquipmentFactory.createEquipment($scope.eq).then(function(response) {
            $location.path('/equipments');
        }).catch(function(response) {
            console.log(response);
        });
    };

}]);