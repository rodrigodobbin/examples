let express = require('../config/express')();
let request = require('supertest')(express);

describe('#ProdutosController', () => {

  it('#Listagem deve ser um json', (done) => {
    request
      .get('/beers')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});