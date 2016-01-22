/**
 * Created by felipperj86 on 20/01/2016.
 */

angular.module('contatooh', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider.when('/contatos', {
            templateUrl: 'partials/contatos.html',
            controller: 'ContatosController'
        });
    });