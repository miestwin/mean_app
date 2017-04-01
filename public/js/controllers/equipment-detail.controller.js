angular.module('EquipmentDetailCtrl', [])
.controller('EquipmentDetailController', ['$scope', '$location', '$routeParams', 'EquipmentFactory', function ($scope, $location, $routeParams,EquipmentFactory) {
    
    showEquipment();
    function showEquipment() {
        EquipmentFactory.showEquipment($routeParams.id).then(function(response) {
            $scope.eq = response.data;
        }).catch(function(response) {
            $location.path('/go-to-the-error');
            console.log(response);
        });
    }

    $scope.createNewEquipment = function createNewEquipment() {
        $location.path('/equipment/new');
    };

    $scope.updateEquipment = function updateEquipment() {
        EquipmentFactory.updateEquipment($scope.eq).then(function(response) {
            $location.path('/equipments');
        }).catch(function(response) {
            $location.path('/go-to-the-error');
            console.log(response);
        });
    };

    $scope.deleteEquipment = function deleteEquipment() {
        EquipmentFactory.deleteEquipment($scope.eq._id).then(function(response) {
            $location.path('/equipments');
        }).catch(function(response) {
            console.log(response);
        });
    };

}]);