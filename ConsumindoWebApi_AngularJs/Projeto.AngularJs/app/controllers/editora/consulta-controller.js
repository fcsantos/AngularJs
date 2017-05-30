app.controller(
    'editora-consulta-controller',
    function ($scope, $http) {

        $scope.consultar = function () {
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

        $scope.excluir = function (id) {
            swal({
                title: "Deseja excluir esta Editora?", text: "", type: "warning",
                showCancelButton: true, confirmButtonColor: "#DD6B55",
                confirmButtonText: "OK", closeOnConfirm: false
            },
            function () {
                $http.delete(url + "api/editora/excluir?id=" + id)
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

            $http.get(url + "api/editora/obter?id=" + id)
                .success(
                    function (d) {

                        $scope.upModel = {
                            IdEditora: d.IdEditora, Nome: d.Nome
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

            $http.put(url + "api/editora/atualizar", $scope.upModel)
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