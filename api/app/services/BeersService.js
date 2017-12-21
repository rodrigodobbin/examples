function BeersService (app) {
  this._app = app;
  this._connection = this._app.infra.connectionFactory();
  this._beersDAO = new app.infra.BeersDAO(this._connection);
}

BeersService.prototype.getAll = function (callback) {
  this._beersDAO.getAll(callback);
  this._connection.end();
}

BeersService.prototype.create = function (item, callback) {
  this._beersDAO.create(item, callback);
  this._connection.end();
}

module.exports = () => {
  return BeersService;
}