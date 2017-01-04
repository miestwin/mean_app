angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/cars-list.html',
            controller: 'CarListController'
        })
        .when('/cars', {
            templateUrl: 'views/cars-list.html',
            controller: 'CarListController'
        })
        .when('/equipments', {
            templateUrl: 'views/equipments-list.html',
            controller: 'EquipmentController'
        })
        .otherwise({
            templateUrl: 'views/404.html'
        });

    $locationProvider.html5Mode(true);
}]);