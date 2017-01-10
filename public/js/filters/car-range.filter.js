angular.module('CarRangeFilter', [])
.filter('carRangeFilter', function() {
    return function(items, range, name) {
        var filtered = [];

        angular.forEach(items, function(item) {
            if(item[name] <= range) {
                filtered.push(item);
            }
        });

        return filtered;
    }
});