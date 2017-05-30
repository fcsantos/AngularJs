app.controller(
    'autor-consulta-controller',
    function ($scope, $http) {

        $scope.consultar = function () {
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

        $scope.excluir = function (id) {
            swal({
                title: "Deseja excluir este Autor?", text: "", type: "warning",
                showCancelButton: true, confirmButtonColor: "#DD6B55",
                confirmButtonText: "OK", closeOnConfirm: false
            },
            function () {
                $http.delete(url + "api/autor/excluir?id=" + id)
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

            $http.get(url + "api/autor/obter?id=" + id)
                .success(
                    function (d) {

                        $scope.upModel = { IdAutor: d.IdAutor, Nome: d.Nome }
                    }
                )
                .error(
                    function (e, s) {
                        $scope.mensagem = sweetAlert("Oops...", +s + " -> " + e, "error");
                    }
                );
        }

        $scope.atualizar = function () {

            $http.put(url + "api/autor/atualizar", $scope.upModel)
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