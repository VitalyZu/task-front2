angular.module('core')
    .filter('unitInfoForm', function () {
        return function (item) {
            switch (item) {
                case 'штука':
                    return 'штуками'
                    break
                case 'упаковка':
                    return 'упаковками'
                    break
                case 'метр погонный':
                    return 'м. погонным'
                    break
                default:
                    return item
                    break
            }
        }
    })