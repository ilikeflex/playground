angular.module('myApp').controller('CharacterCtrl', characterCtr);

characterCtr.$inject = ['$scope', 'characterService', '$log', 'resolvedCharacters'];

function characterCtr($scope, characterService, $log, resolvedCharacters) {
    var chrCtrl = this;

    chrCtrl.selectedCharacter = {};
    chrCtrl.result = resolvedCharacters.data.characters;
    chrCtrl.films = [];

    chrCtrl.debugApp = function () {
        console.log('selectedCharacter', chrCtrl.selectedCharacter, 'result', chrCtrl.result);
    }

    chrCtrl.loadCharacter = function () {
        console.log('chrCtrl.selectedCharacter', chrCtrl.selectedCharacter);
        characterService.loadCharacter(chrCtrl.selectedCharacter).then(function (result) {
            //debugger;
            chrCtrl.films = result;
        }, function (error) {
            chrCtrl.films = error;
        });
    }

    function _loadCharacter(character) {

        return characterService.loadCharacter(character).then(function (data) {
            //debugger;
            characterService.loadfilms(data.data.films);
            chrCtrl.result = data.data.characters;
            console.log('chrCtrl.result', chrCtrl.result, 'data', data, 'characters', data.data.characters);
            return chrCtrl.result;
        }, function (data) {
            console.log('error !!!!!!!!!!!!!');
        });
    }
}