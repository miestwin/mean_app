angular.module('CarListCtrl', []).controller('CarListController', ['$scope', 'CarFactory', function($scope, CarFactory) {
    // $http.get('/cars').then(function(data) {
    //     if(data.status === 200) {
    //         $scope.cars = data.data;
    //     }
    // });
    getCars();

    function getCars() {
        CarFactory.getCars().then(function (data) {
            if(data.status === 200) {
                $scope.cars = data.data;
            }
        });
    }
}]);