//criando um módulo em AngularJS para realizar 
//mapeamento de rotas para uma SinglePage (SPA) 
//ngRoute (biblioteca para mapeamento de rotas)
var app = angular.module('app', ['ngRoute']);

//variavel para definir o dominio da api de serviços..
var url = "http://localhost:51558/";

//configurar as rotas..
app.config
    (
    function ($routeProvider) {
        //$routeProvider -> objeto do angular para mapear rotas..
        $routeProvider
            .when(
                '/autor/cadastro', //rota na URL..
                {
                    templateUrl: 'app/views/autor/cadastro.html',
                    controller: 'autor-cadastro-controller'
                }
            )
            .when(
                '/autor/consulta', //rota na URL..
                {
                    templateUrl: 'app/views/autor/consulta.html',
                    controller: 'autor-consulta-controller'
                }
            )
            .when(
                '/editora/cadastro', //rota na URL..
                {
                    templateUrl: 'app/views/editora/cadastro.html',
                    controller: 'editora-cadastro-controller'
                }
            )
            .when(
                '/editora/consulta', //rota na URL..
                {
                    templateUrl: 'app/views/editora/consulta.html',
                    controller: 'editora-consulta-controller'
                }
            )
            .when(
                '/livro/cadastro', //rota na URL..
                {
                    templateUrl: 'app/views/livro/cadastro.html',
                    controller: 'livro-cadastro-controller'
                }
            )
            .when(
                '/livro/consulta', //rota na URL..
                {
                    templateUrl: 'app/views/livro/consulta.html',
                    controller: 'livro-consulta-controller'
                }
            );
    });