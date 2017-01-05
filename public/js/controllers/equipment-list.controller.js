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

    $scope.createNewEquipment = function createNewEquipment() {
        $location.path('/equipment/new');
    };

    $scope.showEquipment = function showEquipment(index) {
        var eq = $scope.equipments[index];
        $location.path('/equipment/' + eq._id);
    };

}]);