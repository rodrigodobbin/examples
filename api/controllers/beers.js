const { check, validationResult } = require('express-validator/check');

module.exports = (app) => {
  // Get All beers
  app.get('/beer', (req, res) => {
    let BeersService = new app.services.BeersService(app);

    BeersService.getAll(req.query, (err, result) => {
      if (err) {
        res.status(500).json(err);
        return;
      }

      res.format({
        json: () => res.json(result)
      });

    });
  });

  // Create a new beer
  app.post('/beer', [
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
  ], (req, res) => {
    let BeersService = new app.services.BeersService(app);
    let item = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.mapped() });
    }

    item.status = 'Ativo';

    BeersService.create(item, (err, result) => {
      if (err) {
        res.status(500).json(err);
        return;
      } 
      item.id = result.insertId;
      res.format({
        json: () => {
          res.location(`beer/${item.id}`);
          res.status(201).json(item);
        }
      });
    });
  });

  // Edit beer status
  app.patch('/beer/:id', [
    check('id')
      .isLength({ min: 1 })
      .withMessage('O id é obrigatório.')
      .isInt()
      .withMessage('Id inválido'),

    check('status')
      .isLength({ min: 1 })
      .withMessage('O status é obrigatório.')

  ], (req, res) => {
    let item = req.body;
    let BeersService = new app.services.BeersService(app);
    const errors = validationResult(req);

    item.id = req.params.id;

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.mapped() });
    }

    BeersService.updateBeerStatus(item, (err, result) => {
      if (err) {
        res.status(500).json(err);
        return;
      }

      res.format({
        json: () => {
          res.location(`beer/${item.id}`);
          res.status(200).json(item);
        }
      });
    });
  });

  // Get a beer detail
  app.get('/beer/:id', [
    check('id')
      .isInt()
      .withMessage('Id inválido')
  ], (req, res) => {
    let BeersService = new app.services.BeersService(app);
    let id = req.params.id;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.mapped() });
    }
    
    BeersService.getBeer(id, (err, result) => {
      if (err) {
        res.status(500).json(err);
        return;
      }

      res.format({
        json: () => res.status(200).json(result)
      });
    });
  });


  // Edit a beer
  app.put('/beer/:id', [
    check('id')
      .isInt()
      .withMessage('Id inválido'),

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
      .withMessage('Formato inválido'),

    check('status')
      .isLength({ min: 1 })
      .withMessage('O status é obrigatório.')
  ], (req, res) => {
    let item = req.body;
    let BeersService = new app.services.BeersService(app);
    const errors = validationResult(req);

    item.id = req.params.id;

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.mapped() });
    }
    
    BeersService.updateBeer(item, (err, result) => {
      if (err) {
        res.status(500).json(err);
        return;
      }

      res.format({
        json: () => {
          res.location(`beer/${item.id}`);
          res.status(200).json(item);
        }
      });
    });
  });

  // Selling a beer
  // TODO
  // Support To sell multiple beers at one time (cart sell)
}