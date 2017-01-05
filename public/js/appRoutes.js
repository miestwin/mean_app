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
        .when('/car/:id', {
            templateUrl: 'views/car-detail.html',
            controller: 'CarDetailController'
        })
        .when('/car/new', {
            templateUrl: 'views/car-create.html',
            controller: 'CarCreateController'
        })
        .when('/equipments', {
            templateUrl: 'views/equipments-list.html',
            controller: 'EquipmentListController'
        })
        .when('/equipment/new', {
            templateUrl: 'views/equipment-create.html',
            controller: 'EquipmentCreateController'
        })
        .when('/equipment/:id', {
            templateUrl: 'views/equipment-detail.html',
            controller: 'EquipmentDetailController'
        })
        .otherwise({
            templateUrl: 'views/404.html'
        });

    $locationProvider.html5Mode(true);
}]);