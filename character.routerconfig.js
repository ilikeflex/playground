angular.module('myApp').config(routeProviderConfig);

routeProviderConfig.$inject = ['$routeProvider', '$locationProvider'];

function routeProviderConfig($routeProvider, $locationProvider) {
    console.log('InsideRoute');
    $routeProvider
        .when('/getCharacters', {
            templateUrl: 'characters.html',
            controller: 'CharacterCtrl',
            controllerAs: 'chrCtrl',
            resolve: {
                resolvedCharacters: resolvedCharacters
            }
        });

    // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(true);
}



function resolvedCharacters(characterService){
    return characterService.loadCharacters();
}