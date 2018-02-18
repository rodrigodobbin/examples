function BeersService (app) {
  this._app = app;
  this._connection = this._app.dao.connectionFactory();
  this._beersDAO = new app.dao.BeersDAO(this._connection);
}

BeersService.prototype.getAll = function (queryParams, callback) {
  if (queryParams.status) {
    this._beersDAO.getAllByStatus(queryParams.status, callback);
  } else {
    this._beersDAO.getAll(callback);
  }
}

BeersService.prototype.create = function (item, callback) {
  this._beersDAO.create(item, callback);
}

BeersService.prototype.updateBeerStatus = function (item, callback) {
  this._beersDAO.updateBeerStatus(item, callback);
}

BeersService.prototype.getBeer = function (id, callback) {
  this._beersDAO.getBeer(id, callback);
}

BeersService.prototype.updateBeer = function (item, callback) {
  this._beersDAO.updateBeer(item, callback);
}

module.exports = () => {
  return BeersService;
}