app.controller(
    'livro-consulta-controller',
    function ($scope, $http) {

        $scope.consultar = function () {
            $http.get(url + "api/livro/listar")
                .success(
                    function (d) {
                        $scope.livros = d;                                                    
                    }
                )
                .error(
                    function (e, s) {
                        $scope.mensagem = "Erro: " + s + " -> " + e;
                    }
                );
        }

        $scope.excluir = function (id) {
            if (window.confirm('Deseja excluir este Livro?')) {

                $http.delete(url + "api/livro/excluir?id=" + id)
                    .success(
                        function (d) {
                            $scope.mensagem = d;
                            $scope.consultar();
                        }
                    )
                    .error(
                        function (e, s) {
                            $scope.mensagem = "Erro: " + s + " -> " + e;
                        }
                    );
            }
        }

        $scope.abrir = function (id) {

            $http.get(url + "api/livro/obter?id=" + id)
                .success(
                    function (d) {

                        $scope.upModel = {IdLivro: d.IdLivro, Titulo: d.Titulo, ISBN: d.ISBN,
                                           Genero: d.Genero, Sinopse: d.Sinopse, Categoria: d.Categoria,
                                           AutorId: d.AutorId, EditoraId: d.EditoraId}
                    }
                )
                .error(
                    function (e, s) {
                        $scope.mensagem = "Erro: " + s + " -> " + e;
                    }
                );
        }

        $scope.atualizar = function () {

            $http.put(url + "api/livro/atualizar", $scope.upModel)
                .success(
                    function (d) {
                        $scope.mensagem = d;
                        $scope.consultar();
                    }
                )
                .error(
                    function (e, s) {
                        $scope.mensagem = "Erro: " + s + " -> " + e;
                    }
                );
        }

    }
);