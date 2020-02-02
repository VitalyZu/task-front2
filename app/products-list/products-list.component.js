angular.module('productsList')
    .component('productsList', {
        templateUrl: 'products-list/products-list.template.html',
        controller: ['$scope', '$http', function productsList($scope, $http) {
            $scope._ = _
            $scope.amount = 1
            $scope.isLoad = false
            $scope.page = 1
            $scope.productAmount = {}
            $http.get('http://127.0.0.1:8888/products.json')
                .then(response => {
                    $scope.data = response.data
                    $scope.isLoad = true
                })
            $scope.getRandom = function (q) {
                return q === 'шт.' ? _.random(10) : _.random(1.1, 5, 1).toFixed(2)
            }
            $scope.upHandler = function (index, code) {
                if ($scope.productAmount[code] && $scope.productAmount[code] < 99) {
                    $scope.productAmount[code]++
                } else if (!$scope.productAmount[code]) {
                    $scope.productAmount[code] = 2
                }
            }
            $scope.downHandler = function (index, code) {
                if ($scope.productAmount[code] && $scope.productAmount[code] > 1) {
                    $scope.productAmount[code]--
                }
            }
            $scope.changePage = function (index) {
                $scope.page = index + 1
            }
            $scope.inputHandle = function () {
                $scope.page = 1
            }
        }]
    })