const { check, validationResult } = require('express-validator/check');

module.exports = (app) => {
  // Get All beers
  app.get('/beers', (req, res, next) => {
    let BeersService = new app.services.BeersService(app);

    BeersService.getAll((err, result) => {
      if (err) next(err);
      res.format({
        json: () => res.json(result)
      });
    });
  });

  // Create a new beer
  app.post('/beers/create', [
    check('marca')
      .isLength({ min: 1 })
      .withMessage('A marca é obrigatória.'),

    check('titulo')
      .isLength({ min: 1 })
      .withMessage('O titulo é obrigatório.'),

    check('preco')
      .isLength({ min: 1 })
      .withMessage('O preço é obrigatório.')
      .isFloat()
      .withMessage('Formato inválido'),

    check('quantidade')
      .isLength({ min: 1 })
      .withMessage('A quantidade é obrigatória.')
      .isInt()
      .withMessage('Formato inválido'),

    check('tipo')
      .isLength({ min: 1 })
      .withMessage('O tipo é obrigatório.'),

    check('volume')
      .isLength({ min: 1 })
      .withMessage('O volume é obrigatório.')
      .isInt()
      .withMessage('Formato inválido')

  ], (req, res, next) => {
    let BeersService = new app.services.BeersService(app);
    let item = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.mapped() });
    }

    BeersService.create(item, (err, result) => {
      if (err) next(err);
      res.format({
        json: () => res.json(result)
      });
    });
  });

  // Remove a beer
  app.post('/beers/remove', [
    check('id')
      .isLength({ min: 1 })
      .withMessage('O id é obrigatório.')
      .isInt()
      .withMessage('Id inválido')

  ], (req, res, next) => {
    let BeersService = new app.services.BeersService(app);
    let item = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.mapped() });
    }

    BeersService.remove(item, (err, result) => {
      if (err) next(err);
      res.format({
        json: () => res.json(result)
      });
    });
  });

  // Get a beer detail
  app.get('/beers/:id', (req, res, next) => {
    let BeersService = new app.services.BeersService(app);
    let id = req.params.id;
    
    BeersService.getBeer(id, (err, result) => {
      if (err) next(err);
      res.format({
        json: () => res.json(result)
      });
    });
  });

  // Selling a beer
  // TODO
  // Support To sell multiple beers at one time (cart sell)

  // Edit a beer info
  // TODO
}