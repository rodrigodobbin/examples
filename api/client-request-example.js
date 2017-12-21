let http = require('http');

let options = {
  hostname: 'localhost',
  port: 3080,
  path: '/beers',
  headers: {
    'Accept': 'application/json'
  }
};

http.get(options, (res) => {
  console.log(`Status: ${res.statusCode}`);
  res.on('data', (body) => {
    console.log(`Corpo: ${body}`);
  });
});