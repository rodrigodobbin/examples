function BeersDAO (connection) {
  this._connection = connection;
}

BeersDAO.prototype.getAll = function (callback) {
  this._connection.query('select * from beers', callback);
}

BeersDAO.prototype.create = function (item, callback) {
  this._connection.query('insert into beers set ?', item, callback);
}

module.exports = () => {
  return BeersDAO;
}