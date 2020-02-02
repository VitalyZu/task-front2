angular.module('productsList')
    .component('productsList', {
        templateUrl: 'products-list/products-list.template.html',
        controller: ['$scope', '$http', '$rootScope', function productsList($scope, $http, $rootScope) {
            $scope._ = _
            $scope.amount = 1
            $scope.isLoad = false
            $scope.page = 1
            $scope.productAmount = {}
            if ($rootScope.data) {
                console.log('NO LOADING')
                $scope.isLoad = true
                $scope.data = $rootScope.data
            }
            else {
                $http.get('http://127.0.0.1:8888/products.json')
                    .then(response => {
                        $scope.data = response.data
                        $scope.isLoad = true
                        $rootScope.data = response.data
                    })
            }

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
            $scope.toCart = function (code, index) {
                let obj = {}
                if ($scope.productAmount[Number(code)]) {
                    count = $scope.productAmount[Number(code)]
                } else { count = 1 }
                obj.code = code
                obj.count = count
                $rootScope.list.push(obj)
                $scope.productAmount[Number(code)] = 1
                let btn = document.getElementsByClassName('btn_cart')[index]
                let btnCart = document.getElementsByClassName('btn-cart')[0]
                btn.classList.add('btd-add-action')
                btnCart.classList.add('btd-add-action')
                setTimeout(() => {
                    btnCart.classList.remove('btd-add-action')
                    btn.classList.remove('btd-add-action')}, 700)
            }
            $scope.goCart = function () {
                window.location.href = '#!/cart/'
            }
        }]
    })