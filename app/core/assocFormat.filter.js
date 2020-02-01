angular.module('core')
    .filter('assocFormat', function () {
        return function (items) {
            items = items.split(';')
            for (let i = 0; i < items.length - 2; i++) {
                items[i] = items[i] + ','
            }
            items[items.length - 1] = items[items.length - 1] + '.'
            return items
        }
    })