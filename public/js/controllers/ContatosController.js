/**
 * Created by felipperj86 on 21/01/2016.
 */
angular.module('contatooh').controller('ContatosController',
    function($resource, $scope) {

        $scope.contatos = [];

        $scope.filtro = '';

        $scope.mensagem = {texto: ''};

        var Contato = $resource('/contatos/:id');

        function buscaContatos() {
            Contato.query(
                function(contatos) {
                    $scope.contatos = contatos;
                    $scope.mensagem = {};
                },
                function(erro) {
                    console.log(erro);
                    $scope.mensagem = {texto: 'Não foi possível obter a lista'};
                }
            );
        }

        buscaContatos();

        $scope.remove = function(contato) {
            Contato.delete({id: contato._id},
                buscaContatos,
                function(erro) {
                    console.log(erro);
                    $scope.mensagem = {texto: 'Não foi possível remover o contato'};
                }
            );
        };
    });