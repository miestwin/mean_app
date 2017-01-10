angular.module('CarBodyFilter',[])
.filter('carBodyFilter', function() {
    return function(items, types) {
        var filtered = [];
        var values = [];
        
        for(t in types) {
            if(types.hasOwnProperty(t)) {
                values.push(types[t]);
            }
        }

        if(values.indexOf(true) !== -1) {
            angular.forEach(items, function(item) {
                if(types[item.car_body.toLowerCase()] === true) {
                    filtered.push(item);
                }
            });
        } else {
            filtered = items;
        }
        
        return filtered;
    };
});