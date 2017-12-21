module.exports = (app) => {
  app.get('/beers', (req, res, next) => {
    let BeersService = new app.services.BeersService(app);

    BeersService.getAll((err, result) => {
      if (err) next(err);
      res.format({
        json: () => res.json(result)
      });
    });
  });
}