const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include:[
      {
        model: Product
      }
    ]
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
        id: req.params.id
    }
  })
  .then(dbUserData => {
    if (!dbUserData) {
        res.status(404).json({message: 'No user found with this id'});
        return;
    }
    res.json(dbUserData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create ({
    username: req.body.username, 
    email: req.body.email,
    password: req.body.password
  })
  .then(dbUserData => res.json(dbUserData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

Category.put('/:id', (req, res) => {
  // update a category by its `id` value
  User.update(req.body, {
    where: {
        id: req.params.id
    }
  })
  .then(dbUserData => {
    if (!dbUserData[0]) {
        res.status(404).json({ message: 'No user found with this id'});
        return;
    }
    res.json(dbUserData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  User.destroy({
    where: {
        id: req.params.id
    }
  })
  .then(dbUserData => {
    if (!dbUserData) {
        res.status(404).json({message: 'No user found with id'});
        return;

    }
    res.json(dbUserData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;