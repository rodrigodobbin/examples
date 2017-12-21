let express = require('../config/express')();
let request = require('supertest')(express);

describe('#BeersService - getAll', () => {
  it('#A Listagem deve ser um json', (done) => {
    request
      .get('/beers')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('#BeersService - create', () => {
  it('#Cadastro de nova cerveja sem marca', (done) => {
    
  });

  it('#Cadastro de nova cerveja sem titulo', (done) => {

  });

  it('#Cadastro de nova cerveja sem preço', (done) => {

  });

  it('#Cadastro de nova cerveja com o preço em formato inválido', (done) => {

  });

  it('#Cadastro de nova cerveja sem quantidade', (done) => {
    
  });

  it('#Cadastro de nova cerveja com a quantidade em formato inválido', (done) => {

  });

  it('#Cadastro de nova cerveja sem tipo', (done) => {

  });

  it('#Cadastro de nova cerveja sem volume', (done) => {
    
  });

  it('#Cadastro de nova cerveja com o volume em formato inválido', (done) => {

  });

  it('#Cadastro de nova cerveja com dados válidos', (done) => {
    
  });
});