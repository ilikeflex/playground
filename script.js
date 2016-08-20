var myApp = angular.module('myApp',['ngRoute']);

myApp.controller('ToddlerCtrl', toddleCtrl);

toddleCtrl.$inject = ['$scope'];

function toddleCtrl($scope) {

    // Define an array of Toddler objects
    $scope.toddlers = [
        {
            "name": "Toddler One",
            "birthday": "1/1/2011",
            "happy": true
        },
        {
            "name": "Toddler Two",
            "birthday": "2/2/2011",
            "happy": true
        },
        {
            "name": "Toddler Three",
            "birthday": "3/3/2011",
            "happy": false
        }
    ];

};