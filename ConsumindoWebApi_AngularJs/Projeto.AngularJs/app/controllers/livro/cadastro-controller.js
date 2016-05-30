app.controller(
    'livro-cadastro-controller',
    function ($scope, $http) {

        //função para trazer os autores da api..
        $scope.obter_autores = function () {
            $http.get(url + "api/autor/listar")
                .success(
                    function (d) {
                        $scope.autores = d;
                    }
                )
                .error(
                    function (e, s) {
                        $scope.mensagem = "Erro: " + s + " -> " + e;
                    }
                );
        }

        //função para trazer as editoras da api..
        $scope.obter_editoras = function () {
            $http.get(url + "api/editora/listar")
                .success(
                    function (d) {
                        $scope.editoras = d;
                    }
                )
                .error(
                    function (e, s) {
                        $scope.mensagem = "Erro: " + s + " -> " + e;
                    }
                );
        }

        //função de cadastro..
        $scope.cadastrar = function () {

            $scope.mensagem = "Enviando requisição...";

            //requisição POST ao serviço..
            $http.post(url + "api/livro/cadastrar", $scope.model)
                .success( //retorno do tipo HTTP OK (200)
                    function (d) { //d -> mensagem
                        $scope.mensagem = d;
                        $scope.model = {}; //limpar a model..
                        //recarregar os campos select
                        $scope.obter_autores();
                        $scope.obter_editoras();
                    }
                )
                .error( //qualquer status diferente de 200
                    function (e, s) { //e -> mensagem, s -> status
                        $scope.mensagem = "Erro: " + s + " -> " + e;
                    }
                );
        }
    }
);