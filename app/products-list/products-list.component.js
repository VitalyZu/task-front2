angular.module('productsList')
    .component('productsList', {
        templateUrl: 'products-list/products-list.template.html',
        controller: ['$scope', '$http', function productsList($scope, $http) {
            $scope._ = _
            $scope.amount = 1
            $http.get('http://127.0.0.1:8888/products.json')
                .then(response => {
                    $scope.data = response.data
                })
            $scope.getRandom = function (q) {
                return q === 'шт.' ? _.random(10) : _.random(1.1, 5, 1).toFixed(2)
            }
            $scope.upHandler = function (index) {
                let element = document.getElementsByClassName('product__count')[index]
                element.value < 99 ? element.value++ : ''
            }
            $scope.downHandler = function (index) {
                let element = document.getElementsByClassName('product__count')[index]
                element.value > 0 ? element.value-- : ''
            }
        }]
    })