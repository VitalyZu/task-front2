angular.module('cartList')
    .component('cartList', {
        templateUrl: 'cart-list/cart-list.template.html',
        controller: ['$scope', '$rootScope', function productsList($scope, $rootScope) {
            $scope._ = _
            $scope.list = []
            _.forEach($rootScope.list,function(e){
                let elem = _.find($rootScope.data,function(o){
                    return o.code === e.code
                })
                elem.count = e.count
                $scope.list.push(elem)
            })
            $scope.delProd = function(index){
                console.log(index)
                $rootScope.list.splice(index,1)
                $scope.list.splice(index,1)
            }
        }]
    })