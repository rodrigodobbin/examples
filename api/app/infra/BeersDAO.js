function BeersDAO (connection) {
  this._connection = connection;
}

BeersDAO.prototype.getAll = function (callback) {
  this._connection.query('select * from beers', callback);
}

BeersDAO.prototype.create = function (item, callback) {
  this._connection.query('insert into beers set ?', item, callback);
}

BeersDAO.prototype.remove = function (item, callback) {
  this._connection.query('delete from beers where id = ?', item.id, callback);
}

BeersDAO.prototype.getBeer = function (id, callback) {
  this._connection.query('select * from beers where id = ?', id, callback);
}

module.exports = () => {
  return BeersDAO;
}