app.controller(
    'autor-cadastro-controller',
    function ($scope, $http) {
        /* $scope -> objeto para comunicar conteudo com a página.. 
           $http -> acessar serviços de APIs (post, get, etc...) 
        */

        //função de cadastro..
        $scope.cadastrar = function () {

            $scope.mensagem = "Enviando requisição...";

            //requisição POST ao serviço..
            $http.post(url + "api/autor/cadastro", $scope.model)
                .success(//retorno do tipo HTTP OK (200)
                    function (d) { //d -> mensagem
                        $scope.mensagem = d;
                        $scope.model = {}; //limpar a model..
                    }
                )
                .error(//qualquer status diferente de 200
                    function (e, s) { //e -> mensagem, s -> status
                        $scope.mensagem = "Erro: " + s + " -> " + e;
                    }
                );
        }
    }
 );