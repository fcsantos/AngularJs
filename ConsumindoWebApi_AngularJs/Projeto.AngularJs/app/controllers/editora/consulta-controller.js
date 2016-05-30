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
    }
);