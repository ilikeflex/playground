angular.module('myApp').factory('characterPropsFactory', characterProps);


function characterProps(){

        function getCharactersUrl(useMock) {

            var result;
            if(useMock){
                result = "character.json"
            }
            else {
                result = "http://swapi.co/api/planets/1/"
            }
            return result;
        }


        function getCharacterUrl(useMock,character) {
            console.log('character',character);
            var result = character.url;
            return result;
        }

        function getFilmUrl(useMock,film) {
            console.log('film',film);
            var result = film;
            return result;
        }

        return {
            getCharactersUrl:getCharactersUrl,
            getCharacterUrl:getCharacterUrl,
            getFilmUrl:getFilmUrl
        }
};
