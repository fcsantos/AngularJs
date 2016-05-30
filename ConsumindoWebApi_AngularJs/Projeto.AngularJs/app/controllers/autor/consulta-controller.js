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
    }
);