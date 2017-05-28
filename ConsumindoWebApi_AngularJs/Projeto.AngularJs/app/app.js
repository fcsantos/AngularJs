//criando um módulo em AngularJS para realizar 
//mapeamento de rotas para uma SinglePage (SPA) 
//ngRoute (biblioteca para mapeamento de rotas)
var app = angular.module('app', ['ngRoute']);

//variavel para definir o dominio da api de serviços..
//var url = "http://localhost:51558/";
var url = "http://apilivreiro.azurewebsites.net/";

//configurar as rotas..
app.config
    (
    function ($routeProvider) {
        //$routeProvider -> objeto do angular para mapear rotas..
        $routeProvider
            .when(
                '/autorCadastro', //rota na URL..
                {
                    templateUrl: 'app/views/autor/cadastro.html',
                    controller: 'autor-cadastro-controller'
                }
            )
            .when(
                '/autorConsulta', //rota na URL..
                {
                    templateUrl: 'app/views/autor/consulta.html',
                    controller: 'autor-consulta-controller'
                }
            )
            .when(
                '/editoraCadastro', //rota na URL..
                {
                    templateUrl: 'app/views/editora/cadastro.html',
                    controller: 'editora-cadastro-controller'
                }
            )
            .when(
                '/editoraConsulta', //rota na URL..
                {
                    templateUrl: 'app/views/editora/consulta.html',
                    controller: 'editora-consulta-controller'
                }
            )
            .when(
                '/livroCadastro', //rota na URL..
                {
                    templateUrl: 'app/views/livro/cadastro.html',
                    controller: 'livro-cadastro-controller'
                }
            )
            .when(
                '/livroConsulta', //rota na URL..
                {
                    templateUrl: 'app/views/livro/consulta.html',
                    controller: 'livro-consulta-controller'
                }
            );
    });