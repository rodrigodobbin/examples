let express = require('../config/express')();
let request = require('supertest')(express);
let assert = require('assert');

describe('GET /beer', () => {
  it('#A Listagem deve ser um json', (done) => {
    request
      .get('/beer')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('#A Listagem deve aceitar query params', (done) => {
    request
      .get('/beer?status=Ativo')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('POST /beer', () => {
  it('#Cadastro de nova cerveja sem marca', (done) => {
    request
      .post('/beer')
      .set('Accept', 'application/json')
      .send({marca: '', titulo: 'titulo teste', descricao: 'testando mocha', preco: 22, quantidade: 200, tipo: 'Lata', volume: 355})
      .expect(400, done);
      
  });

  it('#Cadastro de nova cerveja sem titulo', (done) => {
    request
      .post('/beer')
      .set('Accept', 'application/json')
      .send({marca: 'marca teste', titulo: '', descricao: 'testando mocha', preco: 22, quantidade: 200, tipo: 'Lata', volume: 355})
      .expect(400, done);
  });

  it('#Cadastro de nova cerveja sem preço', (done) => {
    request
      .post('/beer')
      .set('Accept', 'application/json')
      .send({marca: 'marca teste', titulo: 'titulo teste', descricao: 'testando mocha', preco: '', quantidade: 200, tipo: 'Lata', volume: 355})
      .expect(400, done);
  });

  it('#Cadastro de nova cerveja com o preço em formato inválido', (done) => {
    request
      .post('/beer')
      .set('Accept', 'application/json')
      .send({marca: 'marca teste', titulo: 'titulo teste', descricao: 'testando mocha', preco: 'abcde', quantidade: 200, tipo: 'Lata', volume: 355})
      .expect(400, done);
  });

  it('#Cadastro de nova cerveja sem quantidade', (done) => {
    request
      .post('/beer')
      .set('Accept', 'application/json')
      .send({marca: 'marca teste', titulo: 'titulo teste', descricao: 'testando mocha', preco: 123, quantidade: '', tipo: 'Lata', volume: 355})
      .expect(400, done);
  });

  it('#Cadastro de nova cerveja com a quantidade em formato inválido', (done) => {
    request
      .post('/beer')
      .set('Accept', 'application/json')
      .send({marca: 'marca teste', titulo: 'titulo teste', descricao: 'testando mocha', preco: 123, quantidade: 'abcde', tipo: 'Lata', volume: 355})
      .expect(400, done);
  });

  it('#Cadastro de nova cerveja sem tipo', (done) => {
    request
      .post('/beer')
      .set('Accept', 'application/json')
      .send({marca: 'marca teste', titulo: 'titulo teste', descricao: 'testando mocha', preco: 123, quantidade: 200, tipo: '', volume: 355})
      .expect(400, done);
  });

  it('#Cadastro de nova cerveja sem volume', (done) => {
    request
      .post('/beer')
      .set('Accept', 'application/json')
      .send({marca: 'marca teste', titulo: 'titulo teste', descricao: 'testando mocha', preco: 123, quantidade: 200, tipo: 'Lata', volume: ''})
      .expect(400, done);
  });

  it('#Cadastro de nova cerveja com o volume em formato inválido', (done) => {
    request
      .post('/beer')
      .set('Accept', 'application/json')
      .send({marca: 'marca teste', titulo: 'titulo teste', descricao: 'testando mocha', preco: 123, quantidade: 200, tipo: 'Lata', volume: 'abcd'})
      .expect(400, done);
  });

  it('#Cadastro de nova cerveja sem descricao', (done) => {
    request
      .post('/beer')
      .set('Accept', 'application/json')
      .send({marca: 'marca teste', titulo: 'titulo sem descricao', descricao: '', preco: 123, quantidade: 200, tipo: 'Lata', volume: 250})
      .expect(201, done);
  });

  it('#Cadastro de nova cerveja com dados válidos', (done) => {
    request
      .post('/beer')
      .set('Accept', 'application/json')
      .send({marca: 'marca teste', titulo: 'titulo teste', descricao: 'testando mocha', preco: 123, quantidade: 200, tipo: 'Lata', volume: 355})
      .expect(201, done);
  });
});

describe('PATCH /beer/:id', () => {
  it('#Atualiza o status de uma cerveja com id em formato inválido', (done) => {
    request
      .patch('/beer/12sdxx')
      .set('Accept', 'application/json')
      .expect(400, done);
  });

  it('#Atualiza o status de uma cerveja sem status', (done) => {
    request
      .patch('/beer/1')
      .set('Accept', 'application/json')
      .send({status: ''})
      .expect(400, done);
  });

  it('#Remove uma cerveja com dados válidos', (done) => {
    request
      .patch('/beer/1')
      .set('Accept', 'application/json')
      .send({status: 'Inativo'})
      .expect(200, done);
  });
});

describe('GET /beer/:id', () => {
  it('#O retorno deve ser um json', (done) => {
    request
      .get('/beer/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('#Deve retornar apenas um resultado', (done) => {
    request
      .get('/beer/1')
      .set('Accept', 'application/json')
      .expect(200)
      .then(response => {
        assert.equal(response.body.length, 1);
        done();
      });
  });

  it('#Deve retornar um erro quando id em formato inválido', (done) => {
    request
      .get('/beer/abcde')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done);
  });
});

describe('PUT /beer/:id', () => {
  it('#Atualiza uma cerveja sem marca', (done) => {
    request
      .put('/beer/1')
      .set('Accept', 'application/json')
      .send({marca: '', titulo: 'titulo teste', descricao: 'testando mocha', preco: 22, quantidade: 200, tipo: 'Lata', volume: 355, status: 'Ativo'})
      .expect(400, done);
      
  });

  it('#Atualiza uma cerveja sem titulo', (done) => {
    request
      .put('/beer/1')
      .set('Accept', 'application/json')
      .send({marca: 'marca teste', titulo: '', descricao: 'testando mocha', preco: 22, quantidade: 200, tipo: 'Lata', volume: 355, status: 'Ativo'})
      .expect(400, done);
  });

  it('#Atualiza uma cerveja sem preço', (done) => {
    request
      .put('/beer/1')
      .set('Accept', 'application/json')
      .send({marca: 'marca teste', titulo: 'titulo teste', descricao: 'testando mocha', preco: '', quantidade: 200, tipo: 'Lata', volume: 355, status: 'Ativo'})
      .expect(400, done);
  });

  it('#Atualiza uma cerveja com o preço em formato inválido', (done) => {
    request
      .put('/beer/1')
      .set('Accept', 'application/json')
      .send({marca: 'marca teste', titulo: 'titulo teste', descricao: 'testando mocha', preco: 'abcde', quantidade: 200, tipo: 'Lata', volume: 355, status: 'Ativo'})
      .expect(400, done);
  });

  it('#Atualiza uma cerveja sem quantidade', (done) => {
    request
      .put('/beer/1')
      .set('Accept', 'application/json')
      .send({marca: 'marca teste', titulo: 'titulo teste', descricao: 'testando mocha', preco: 123, quantidade: '', tipo: 'Lata', volume: 355, status: 'Ativo'})
      .expect(400, done);
  });

  it('#Atualiza uma cerveja com a quantidade em formato inválido', (done) => {
    request
      .put('/beer/1')
      .set('Accept', 'application/json')
      .send({marca: 'marca teste', titulo: 'titulo teste', descricao: 'testando mocha', preco: 123, quantidade: 'abcde', tipo: 'Lata', volume: 355, status: 'Ativo'})
      .expect(400, done);
  });

  it('#Atualiza uma cerveja sem tipo', (done) => {
    request
      .put('/beer/1')
      .set('Accept', 'application/json')
      .send({marca: 'marca teste', titulo: 'titulo teste', descricao: 'testando mocha', preco: 123, quantidade: 200, tipo: '', volume: 355, status: 'Ativo'})
      .expect(400, done);
  });

  it('#Atualiza uma cerveja sem volume', (done) => {
    request
      .put('/beer/1')
      .set('Accept', 'application/json')
      .send({marca: 'marca teste', titulo: 'titulo teste', descricao: 'testando mocha', preco: 123, quantidade: 200, tipo: 'Lata', volume: '', status: 'Ativo'})
      .expect(400, done);
  });

  it('#Atualiza uma cerveja com o volume em formato inválido', (done) => {
    request
      .put('/beer/1')
      .set('Accept', 'application/json')
      .send({marca: 'marca teste', titulo: 'titulo teste', descricao: 'testando mocha', preco: 123, quantidade: 200, tipo: 'Lata', volume: 'abcd', status: 'Ativo'})
      .expect(400, done);
  });

  it('#Atualiza uma cerveja sem status', (done) => {
    request
      .put('/beer/1')
      .set('Accept', 'application/json')
      .send({marca: 'marca teste', titulo: 'titulo teste', descricao: 'testando mocha', preco: 123, quantidade: 200, tipo: 'Lata', volume: 'abcd', status: ''})
      .expect(400, done);
  });

  it('#Atualiza uma cerveja sem descricao', (done) => {
    request
      .put('/beer/1')
      .set('Accept', 'application/json')
      .send({marca: 'marca teste', titulo: 'titulo sem descricao', descricao: '', preco: 123, quantidade: 200, tipo: 'Lata', volume: 250, status: 'Ativo'})
      .expect(200, done);
  });

  it('#Atualiza uma cerveja com dados válidos', (done) => {
    request
      .put('/beer/1')
      .set('Accept', 'application/json')
      .send({marca: 'marca teste', titulo: 'titulo teste', descricao: 'testando mocha', preco: 123, quantidade: 200, tipo: 'Lata', volume: 355, status: 'Ativo'})
      .expect(200, done);
  });
});