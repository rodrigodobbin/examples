let mysql = require('mysql');

function CreateDBConnection() {
  if (!process.env.NODE_ENV) {
    return mysql.createConnection({
      host: 'localhost',
      user: 'dobbin',
      password: 'dobbin',
      database: 'examples_api'
    });
  }

  if (process.env.NODE_ENV === 'test') {
    return mysql.createConnection({
      host: 'localhost',
      user: 'dobbin',
      password: 'dobbin',
      database: 'examples_api_test'
    });
  }  
}

module.exports = () => {
  return CreateDBConnection;
}

