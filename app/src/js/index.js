'use strict';

let app = angular.module('myApp', ['ngMaterial']).controller('MyCtrl',
    ($scope) => {
        $scope.dinos = [{
            name: '',
            health: '',
            stamina: '',
            food: '',
            weight: '',
            damage: '',
            lvl: '',
            gender: '',
            saddleLvl: ''
        }];

        $scope.dinos.push({
            name: 'rex',
            health: '20000',
            stamina: '10000',
            food: '34',
            weight: '34343',
            damage: '12234',
            lvl: '245',
            gender: 'M',
            saddleLvl: '12'
        })
    });