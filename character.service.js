angular.module('myApp').service('characterService', characterService);
characterService.$inject = ['$q', 'characterDataFactory'];


function characterService($q, characterDataFactory) {

    this.loadCharacters = function () {
        console.log('characterSrvc loadCharacters');
        return characterDataFactory.getCharacters();
    }

    this.loadCharacter = function (character) {

        var deferred = $q.defer();
        var self = this;
        console.log('characterSrvc loadCharacter', character);
        _loadCharacter(character).then(loadCharacterComplete).catch(loadCharacterFailed);

        function loadCharacterComplete(result){
            var resultFilms = loadfilms(result);
            return deferred.resolve(resultFilms);

        };

        function loadCharacterFailed(error) {
            var result = [];
            var filmDetail = {title: error.data.detail, releaseDate: ''};
            result.push(filmDetail);
            return deferred.reject(result);
        };


        return deferred.promise;
    }



    function _loadCharacter(character) {

        var deffered = $q.defer();

        characterDataFactory.getCharacter(character).then(function (result) {
            deffered.resolve(result.data.films)
        }, function (error) {
            console.log('error loading character', character, 'error message', error);
            deffered.reject(error);
        });

        return deffered.promise;
    }

    function _loadfilm(film) {

        return characterDataFactory.getFilm(film);
    }

    function loadfilms(films) {

        console.log('characterSrvc loadfilms', films);
        console.log('Before');
        var deffered = $q.defer();
        var promises = [];
        for (var i = 0; i < films.length; i++) {
            promises.push(_loadfilm(films[i]));
        }

        var result = [];

        $q.all(promises).then(function (values) {
            for (var i = 0; i < values.length; i++) {
                console.log('Mid');
                var filmDetail = {title: values[i].data.title, releaseDate: values[i].data.release_date};
                result.push(filmDetail);
            }
            return deffered.resolve(result);
        });

        return deffered.promise;
    }
}
