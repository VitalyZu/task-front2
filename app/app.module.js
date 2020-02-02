angular.module('myApp', ['productsList','cartList', 'core', 'ngRoute'])
    .constant('_', window._)
    .run(function ($rootScope) {
        $rootScope.list = []
        $rootScope.data = ''
    })