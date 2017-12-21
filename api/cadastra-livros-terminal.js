let http = require('http');

let options = {
  hostname: 'localhost',
  port: 3000,
  path: '/produtos',
  method: 'post',
  headers: {
    'Accept': 'application/json',
    'Content-type': 'application/json'
  }
};

let client = http.request(options, (res) => {
  console.log(`Status: ${res.statusCode}`);
  res.on('data', (body) => {
    console.log(`Corpo: ${body}`);
  });
});

let produto = {
  titulo: 'Titulo do terminal',
  descricao: 'Um livro vindo do terminal',
  preco: 120
};

client.end(JSON.stringify(produto));