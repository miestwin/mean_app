angular.module('CarRangeFilter', [])
.filter('carRangeFilter', function() {
    return function(items, minRange, maxRange, name) {
        var filtered = [];

        angular.forEach(items, function(item) {
            if(item[name] >= minRange && item[name] <= maxRange) {
                filtered.push(item);
            }
        });

        return filtered;
    }
});