angular.module('core')
    .filter('unitForm', function () {
        return function (item) {
            switch (item) {
                case 'штука':
                    return 'штукy'
                    break
                case 'упаковка':
                    return 'упаковкy'
                    break
                default:
                    return item
                    break
            }
        }
    })