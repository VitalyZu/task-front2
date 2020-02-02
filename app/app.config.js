angular.
    module('myApp').
    config(['$routeProvider',
        function config($routeProvider) {
            $routeProvider.
                when('/products', {
                    template: '<products-list></products-list>'
                }).
                when('/cart/', {
                    template: '<cart-list></cart-list>'
                }).
                otherwise('/products');
        }
    ]);