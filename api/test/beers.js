let express = require('../config/express')();
let request = require('supertest')(express);

describe('GET /beers', () => {
  it('#A Listagem deve ser um json', (done) => {
    request
      .get('/beers')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('POST /beers/create', () => {
  it('#Cadastro de nova cerveja sem marca', (done) => {
    request
      .post('/beers/create')
      .send({marca: '', titulo: 'titulo teste', descricao: 'testando mocha', preco: 22, quantidade: 200, tipo: 'Lata', volume: 355})
      .expect(422, done);
      
  });

  it('#Cadastro de nova cerveja sem titulo', (done) => {
    request
      .post('/beers/create')
      .send({marca: 'marca teste', titulo: '', descricao: 'testando mocha', preco: 22, quantidade: 200, tipo: 'Lata', volume: 355})
      .expect(422, done);
  });

  it('#Cadastro de nova cerveja sem preço', (done) => {
    request
      .post('/beers/create')
      .send({marca: 'marca teste', titulo: 'titulo teste', descricao: 'testando mocha', preco: '', quantidade: 200, tipo: 'Lata', volume: 355})
      .expect(422, done);
  });

  it('#Cadastro de nova cerveja com o preço em formato inválido', (done) => {
    request
      .post('/beers/create')
      .send({marca: 'marca teste', titulo: 'titulo teste', descricao: 'testando mocha', preco: 'abcde', quantidade: 200, tipo: 'Lata', volume: 355})
      .expect(422, done);
  });

  it('#Cadastro de nova cerveja sem quantidade', (done) => {
    request
      .post('/beers/create')
      .send({marca: 'marca teste', titulo: 'titulo teste', descricao: 'testando mocha', preco: 123, quantidade: '', tipo: 'Lata', volume: 355})
      .expect(422, done);
  });

  it('#Cadastro de nova cerveja com a quantidade em formato inválido', (done) => {
    request
      .post('/beers/create')
      .send({marca: 'marca teste', titulo: 'titulo teste', descricao: 'testando mocha', preco: 123, quantidade: 'abcde', tipo: 'Lata', volume: 355})
      .expect(422, done);
  });

  it('#Cadastro de nova cerveja sem tipo', (done) => {
    request
      .post('/beers/create')
      .send({marca: 'marca teste', titulo: 'titulo teste', descricao: 'testando mocha', preco: 123, quantidade: 200, tipo: '', volume: 355})
      .expect(422, done);
  });

  it('#Cadastro de nova cerveja sem volume', (done) => {
    request
      .post('/beers/create')
      .send({marca: 'marca teste', titulo: 'titulo teste', descricao: 'testando mocha', preco: 123, quantidade: 200, tipo: 'Lata', volume: ''})
      .expect(422, done);
  });

  it('#Cadastro de nova cerveja com o volume em formato inválido', (done) => {
    request
      .post('/beers/create')
      .send({marca: 'marca teste', titulo: 'titulo teste', descricao: 'testando mocha', preco: 123, quantidade: 200, tipo: 'Lata', volume: 'abcd'})
      .expect(422, done);
  });

  it('#Cadastro de nova cerveja sem descricao', (done) => {
    request
      .post('/beers/create')
      .send({marca: 'marca teste', titulo: 'titulo sem descricao', descricao: '', preco: 123, quantidade: 200, tipo: 'Lata', volume: 250})
      .expect(200, done);
  });

  it('#Cadastro de nova cerveja com dados válidos', (done) => {
    request
      .post('/beers/create')
      .send({marca: 'marca teste', titulo: 'titulo teste', descricao: 'testando mocha', preco: 123, quantidade: 200, tipo: 'Lata', volume: 355})
      .expect(200, done);
  });
});