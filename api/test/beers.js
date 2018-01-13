let express = require('../config/express')();
let request = require('supertest')(express);
let assert = require('assert');

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
      .set('Accept', 'application/json')
      .send({marca: '', titulo: 'titulo teste', descricao: 'testando mocha', preco: 22, quantidade: 200, tipo: 'Lata', volume: 355})
      .expect(422, done);
      
  });

  it('#Cadastro de nova cerveja sem titulo', (done) => {
    request
      .post('/beers/create')
      .set('Accept', 'application/json')
      .send({marca: 'marca teste', titulo: '', descricao: 'testando mocha', preco: 22, quantidade: 200, tipo: 'Lata', volume: 355})
      .expect(422, done);
  });

  it('#Cadastro de nova cerveja sem preço', (done) => {
    request
      .post('/beers/create')
      .set('Accept', 'application/json')
      .send({marca: 'marca teste', titulo: 'titulo teste', descricao: 'testando mocha', preco: '', quantidade: 200, tipo: 'Lata', volume: 355})
      .expect(422, done);
  });

  it('#Cadastro de nova cerveja com o preço em formato inválido', (done) => {
    request
      .post('/beers/create')
      .set('Accept', 'application/json')
      .send({marca: 'marca teste', titulo: 'titulo teste', descricao: 'testando mocha', preco: 'abcde', quantidade: 200, tipo: 'Lata', volume: 355})
      .expect(422, done);
  });

  it('#Cadastro de nova cerveja sem quantidade', (done) => {
    request
      .post('/beers/create')
      .set('Accept', 'application/json')
      .send({marca: 'marca teste', titulo: 'titulo teste', descricao: 'testando mocha', preco: 123, quantidade: '', tipo: 'Lata', volume: 355})
      .expect(422, done);
  });

  it('#Cadastro de nova cerveja com a quantidade em formato inválido', (done) => {
    request
      .post('/beers/create')
      .set('Accept', 'application/json')
      .send({marca: 'marca teste', titulo: 'titulo teste', descricao: 'testando mocha', preco: 123, quantidade: 'abcde', tipo: 'Lata', volume: 355})
      .expect(422, done);
  });

  it('#Cadastro de nova cerveja sem tipo', (done) => {
    request
      .post('/beers/create')
      .set('Accept', 'application/json')
      .send({marca: 'marca teste', titulo: 'titulo teste', descricao: 'testando mocha', preco: 123, quantidade: 200, tipo: '', volume: 355})
      .expect(422, done);
  });

  it('#Cadastro de nova cerveja sem volume', (done) => {
    request
      .post('/beers/create')
      .set('Accept', 'application/json')
      .send({marca: 'marca teste', titulo: 'titulo teste', descricao: 'testando mocha', preco: 123, quantidade: 200, tipo: 'Lata', volume: ''})
      .expect(422, done);
  });

  it('#Cadastro de nova cerveja com o volume em formato inválido', (done) => {
    request
      .post('/beers/create')
      .set('Accept', 'application/json')
      .send({marca: 'marca teste', titulo: 'titulo teste', descricao: 'testando mocha', preco: 123, quantidade: 200, tipo: 'Lata', volume: 'abcd'})
      .expect(422, done);
  });

  it('#Cadastro de nova cerveja sem descricao', (done) => {
    request
      .post('/beers/create')
      .set('Accept', 'application/json')
      .send({marca: 'marca teste', titulo: 'titulo sem descricao', descricao: '', preco: 123, quantidade: 200, tipo: 'Lata', volume: 250})
      .expect(200, done);
  });

  it('#Cadastro de nova cerveja com dados válidos', (done) => {
    request
      .post('/beers/create')
      .set('Accept', 'application/json')
      .send({marca: 'marca teste', titulo: 'titulo teste', descricao: 'testando mocha', preco: 123, quantidade: 200, tipo: 'Lata', volume: 355})
      .expect(200, done);
  });
});

describe('POST /beers/remove', () => {
  it('#Remove uma cerveja sem id', (done) => {
    request
      .post('/beers/remove')
      .set('Accept', 'application/json')
      .send({id: ''})
      .expect(422, done);
  });

  it('#Remove uma cerveja com id em formato inválido', (done) => {
    request
      .post('/beers/remove')
      .set('Accept', 'application/json')
      .send({id: '12sdxx'})
      .expect(422, done);
  });

  it('#Remove uma cerveja com dados válidos', (done) => {
    request
      .post('/beers/remove')
      .set('Accept', 'application/json')
      .send({id: 2})
      .expect(200, done);
  });
});

describe('GET /beers/:id', () => {
  it('#O retorno deve ser um json', (done) => {
    request
      .get('/beers/3')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('#Deve retornar apenas um resultado', (done) => {
    request
      .get('/beers/1')
      .set('Accept', 'application/json')
      .expect(200)
      .then(response => {
        assert.equal(response.body.length, 1);
        done();
      });
  });

  it('#Deve retornar um array vazio quando id em formato inválido', (done) => {
    request
      .get('/beers/abcde')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        assert.equal(response.body.length, 0);
        done();
      });
  });

  it('#Deve retornar um array vazio quando sem id', (done) => {
    request
      .get('/beers/\'\'')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        assert.equal(response.body.length, 0);
        done();
      });
  });
});