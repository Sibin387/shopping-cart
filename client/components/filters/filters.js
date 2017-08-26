export default angular.module("shoppingCartApp.filters", [])
    .filter('findTotal', function () {
    return function (data, key) {      
        if (angular.isUndefined(data) || angular.isUndefined(key))
            return 0;        
        var sum = 0;        
        angular.forEach(data,function(value){
            sum = sum + parseInt(value[key], 10);
        });        
        return sum;
    }
})
    .filter('priceRange', () => {
        return function (data, priceIncludes,ranges) {      
            if (priceIncludes.length > 0) {
                data = data.filter((item)=>{
                    if ((parseInt(item.price) >= parseInt(ranges[0])) && (parseInt(item.price) <= parseInt(ranges[1])))
                        return item;
                })
            }
            return data;
        }
        })
    .filter('category', () => {
        return function (data, categories) {
            if(categories.length>0){
                data = data.filter((item)=>{
                    for (let category of categories) {
                        if(category==item.category)return true;
                    }
                });
            }
            return data;
        }
    }).name;