angular.module('myApp').factory('characterDataFactory',characterDataFactory);

    characterDataFactory.$inject = ['$http','characterPropsFactory'];

    function characterDataFactory($http,characterPropsFactory){

    var mock = { getCharacters : true,
                 getCharacter : false,
                 getFilm : false}

    function getCharacters() {

        var useMock = mock.getCharacters;
        var url = characterPropsFactory.getCharactersUrl(useMock);
        var result = $http.get(url, {timeout: 200000});
        return result;

    }

    function getCharacter(character) {

        var useMock = mock.getCharacter;
        var url = characterPropsFactory.getCharacterUrl(useMock,character);
        var result = $http.get(url, {timeout: 200000});
        return result;

    }

    function getFilm(film) {

        var useMock = mock.getFilm;
        var url = characterPropsFactory.getFilmUrl(useMock,film);
        var result = $http.get(url, {timeout: 200000});
        return result;
    }

    return {
        getCharacters : getCharacters,
        getCharacter : getCharacter,
        getFilm : getFilm
    }
}
