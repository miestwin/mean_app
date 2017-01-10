angular.module('CarCheckboxFilter',[])
.filter('carCheckboxFilter', function() {
    return function(items, types, name) {
        
        var filtered = [];
        var values = [];
        
        for(t in types) {
            if(types.hasOwnProperty(t)) {
                values.push(types[t]);
            }
        }

        if(values.indexOf(true) !== -1) {
            angular.forEach(items, function(item) {
                if(types[item[name].toLowerCase()] === true) {
                    filtered.push(item);
                }
            });
        } else {
            filtered = items;
        }
        
        return filtered;
    };
});