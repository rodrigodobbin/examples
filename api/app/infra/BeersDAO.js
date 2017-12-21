function BeersDAO (connection) {
  this._connection = connection;
}

BeersDAO.prototype.getAll = function (callback) {
  this._connection.query('select * from beers', callback);
}

module.exports = () => {
  return BeersDAO;
}