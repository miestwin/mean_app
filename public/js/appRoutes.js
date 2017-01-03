angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/cars.html',
            controller: 'CarController'
        })
        .when('/cars', {
            templateUrl: 'views/cars.html',
            controller: 'CarController'
        })
        .when('/equipments', {
            templateUrl: 'views/equipments.html',
            controller: 'EquipmentController'
        });

    $locationProvider.html5Mode(true);
}]);