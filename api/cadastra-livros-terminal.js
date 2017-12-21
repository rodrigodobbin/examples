let http = require('http');

let options = {
  hostname: 'localhost',
  port: 3080,
  path: '/beers/create',
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
  marca: 'marca',
  titulo: 'titulo',
  descricao: 'Um livro vindo do terminal',
  preco: 22,
  quantidade: 200, 
  tipo: 'Lata', 
  volume: 355
};

client.end(JSON.stringify(produto));