/**
 * Created by felipperj86 on 21/01/2016.
 */
angular.module('contatooh').controller('ContatosController',
    function($scope) {
        $scope.total = 0;

        $scope.incrementa = function() {
            $scope.total++;
        };
    });