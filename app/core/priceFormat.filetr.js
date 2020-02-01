angular.module('core')
    .filter('priceFormat', function () {
        return function (item) {
            item = item.toFixed(2)
            let [a, b] = item.toString().split('.')
            return (`${a},${b}`)
        }
    })