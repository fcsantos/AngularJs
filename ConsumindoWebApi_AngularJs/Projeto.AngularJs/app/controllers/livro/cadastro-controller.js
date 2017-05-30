app.controller(
    'livro-cadastro-controller',
    function ($scope, $http) {
        /* $scope -> objeto para comunicar conteudo com a página.. 
           $http -> acessar serviços de APIs (post, get, etc...) 
        */

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
                        $scope.mensagem = sweetAlert("Oops...", +s + " -> " + e, "error");
                    }
                );
        }

        //inicializando combo autor
        $scope.obter_autores();

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
                        $scope.mensagem = sweetAlert("Oops...", +s + " -> " + e, "error");
                    }
                );
        }

        //inicializando combo editora
        $scope.obter_editoras();

        //função de cadastro..
        $scope.cadastrar = function () {

            $scope.mensagem = "Enviando requisição...";

            //requisição POST ao serviço..
            $http.post(url + "api/livro/cadastrar", $scope.model)
                .success( //retorno do tipo HTTP OK (200)
                    function (d) { //d -> mensagem                        
                        $scope.model = {}; //limpar a model..
                        $scope.mensagem = swal("Good job!", d, "success");
                        //recarregar os campos select
                        $scope.obter_autores();
                        $scope.obter_editoras();
                    }
                )
                .error( //qualquer status diferente de 200
                    function (e, s) { //e -> mensagem, s -> status
                        $scope.mensagem = sweetAlert("Oops...", + s + " -> " + e, "error");
                    }
                );
        }
    }
);