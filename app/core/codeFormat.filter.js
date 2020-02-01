angular.module('core')
    .filter('codeFormat', function () {
        return function (item) {
            return Number(item)
        }
    })