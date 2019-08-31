var appIndex = angular.module("appTeste", []);

//criacao do controller
appIndex.controller("indexController", function ($scope, $http) {

    $scope.nome = "alicio";
    $scope.sobreNome = "da cunha";
    $scope.listaChamado = [];

    $scope.listarChamados = function () {
        $http({ method: 'GET', url: 'http://localhost:8080/api_proway/rest/chamados/' }).then(
            function (response) {
                console.log('success');
                console.log(response.data);
                console.log(response.status);

                $scope.listaChamado = response.data;
            },
            function (response) {
                console.log('error');
                console.log(response.data);
                console.log(response.status);
            });
    };

    $scope.salvarChamado = function () {

    };
});