'use strict';

angular.module('exemploAngular')
  .controller('HomeCtrl', ['$scope', 'requests', function($scope, requests) {

    var self = this;
    this.cervejas = [];
    this.candidato = {};

    this.vender = function (id) {
      if (self.cervejas[id-1].quantidade > 0) {
        self.cervejas[id-1].quantidade--;
      }

      // Requisição para o servidor
      // requests.post('www.dominio.com/venderCerveja', {id: id}).then(function(d) {
        // console.log('Cerveja vendida');
      // });
    };

    // Requisição para o servidor
    requests.get('./cervejas.json').then(function(d) {
      self.cervejas = d.data;
    });



  }]);
