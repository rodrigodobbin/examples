let app = require('./config/express')();

app.listen(3080, () => {
  console.log('servidor rodando');
});