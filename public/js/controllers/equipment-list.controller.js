angular.module('EquipmentListCtrl', [])
.controller('EquipmentListController', ['$scope', '$location','EquipmentFactory', function($scope, $location, EquipmentFactory) {

    getEquipments();
    function getEquipments() {
        EquipmentFactory.getEquipments().then(function(response) {
            $scope.equipments = response.data;
        }).catch(function(response) {
            console.log(response);
        });
    }

}]);