angular.module('core')
    .filter('onPage', function () {
        return function (items, letter, page) {
            var filtered = []
            var letterMatch = new RegExp(letter, 'i')
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                if (letterMatch.test(item.title.substring(0))) {
                    filtered.push(item);
                }
            }
            return _.chunk(filtered, 10)[+page - 1] 
        }
    })