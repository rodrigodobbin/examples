function BeersDAO (connection) {
  this._connection = connection;
}

BeersDAO.prototype.getAll = function (callback) {
  this._connection.query('select * from beers', callback);
}

BeersDAO.prototype.getAllByStatus = function (status, callback) {
  this._connection.query('select * from beers where status = ?', status, callback);
}

BeersDAO.prototype.create = function (item, callback) {
  this._connection.query('insert into beers set ?', item, callback);
}

BeersDAO.prototype.updateBeerStatus = function (item, callback) {
  this._connection.query('update beers set status = ? where id = ?', [item.status, item.id], callback);
}

BeersDAO.prototype.getBeer = function (id, callback) {
  this._connection.query('select * from beers where id = ?', id, callback);
}

BeersDAO.prototype.updateBeer = function (item, callback) {
  this._connection.query(`update beers set 
                          marca = ?,
                          preco = ?,
                          quantidade = ?,
                          titulo = ?,
                          descricao = ?,
                          tipo = ?,
                          volume = ?,
                          status = ? where id = ?`, 
                          [item.marca, item.preco, item.quantidade, item.titulo, item.descricao, item.tipo, item.volume, item.status, item.id], callback);
}

module.exports = () => {
  return BeersDAO;
}