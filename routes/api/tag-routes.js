const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll(
    {
      attributes: [
        'id',
        'tag_name'
      ],
      include: [
        {
          model: ProductTag,
          attributes: ['tag_id', 'product_id'],
          include: {
            model: Product,
            attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
            include: {
              model: Category,
              attributes: ['id', 'category_name']
            }
          }
        }
      ]
    })
      .then(tagData => res.json(tagData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: ProductTag,
          attributes: ['tag_id', 'product_id'],
          include: {
            model: Product,
            attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
            include: {
              model: Category,
              attributes: ['id', 'category_name']
            }
          }
        }
      ]
    })
    .then(tagData => {
      if (!tagData) {
        res.status(404).json({ message: 'No tag with that id.' });
        return;
      }
      res.json(tagData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update({
    tag_name: req.body.tag_name
  },
  {
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'There is no tag with that id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy(
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'There is no tag with that id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
