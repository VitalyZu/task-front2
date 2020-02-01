angular.module('core')
    .filter('imgPath', function () {
        return function (item) {
            let re = /.jpg$/
            return item.replace(re, '_220x220_1$&')
        }
    })