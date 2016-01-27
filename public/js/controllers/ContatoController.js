angular.module('contatooh').controller('ContatoController',
    function ($scope, $resource, $routeParams) {
        var Contato = $resource('/contatos/:id');
        if ($routeParams.contatoId) {
            Contato.get({id: $routeParams.contatoId},
                function (contato) {
                    $scope.contato = contato;
                },
                function (erro) {
                    $scope.mensagem = {
                        texto: 'Contato não existe. Novo contato.'
                    };
                }
            );
        } else {
            $scope.contato = {};
        }

        $scope.salva = function() {
            $scope.contato = new Contato();
            $scope.contato.$save()
                .then(function() {
                    $scope.mensagem = {texto: 'Salvo com sucesso'};

                    $scope.contato = new Contato();
                })
                .catch(function(erro) {
                    $scope.mensagem = {texto: 'Não foi possível salvar'};
                });
        };
    });