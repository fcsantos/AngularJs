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
                        $scope.mensagem = sweetAlert("Oops...", +s + " -> " + e, "error");
                    }
                );
        }

        $scope.excluir = function (id) {
            swal({
                title: "Deseja excluir este Livro?", text: "", type: "warning",
                showCancelButton: true, confirmButtonColor: "#DD6B55",
                confirmButtonText: "OK", closeOnConfirm: false
            },
            function () {
                $http.delete(url + "api/livro/excluir?id=" + id)
	            .success(
		            function (d) {
		                $scope.mensagem = swal("Deleted!", d, "success");
		                $scope.consultar();
		            }
	            )
	            .error(
		            function (e, s) {
		                $scope.mensagem = sweetAlert("Oops...", +s + " -> " + e, "error");
		            }
	            );
            });
        }

        $scope.abrir = function (id) {

            $http.get(url + "api/livro/obter?id=" + id)
                .success(
                    function (d) {

                        $scope.upModel = {
                            IdLivro: d.IdLivro, Titulo: d.Titulo, ISBN: d.ISBN,
                            Genero: d.Genero, Sinopse: d.Sinopse, Categoria: d.Categoria,
                            AutorId: d.AutorId, EditoraId: d.EditoraId
                        }
                    }
                )
                .error(
                    function (e, s) {
                        $scope.mensagem = sweetAlert("Oops...", +s + " -> " + e, "error");
                    }
                );
        }

        $scope.atualizar = function () {

            $http.put(url + "api/livro/atualizar", $scope.upModel)
                .success(
                    function (d) {
                        $scope.mensagem = swal("Good job!", d, "success");;
                        $scope.consultar();
                    }
                )
                .error(
                    function (e, s) {
                        $scope.mensagem = sweetAlert("Oops...", +s + " -> " + e, "error");
                    }
                );
        }
    }
);