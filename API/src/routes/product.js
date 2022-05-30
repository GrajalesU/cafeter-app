const express = require('express');
const connection = require('../database/connection');

const router = express.Router();

router.get('/', (req, res) => {
  connection.query('SELECT * FROM product', (err, results) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.json(results);
  });
});

router.get('/:id', (req, res) => {
  connection.query('SELECT * FROM product WHERE id = ?', [req.params.id], (err, results) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.json(results[0]);
  });
});

router.post('/', (req, res) => {
  const {
    name, ref, price, weight, category, stock,
  } = req.body;
  const creationDate = new Date().toLocaleString().split(',')[0].split('/').reverse().join('-');
  connection.query(
    'INSERT INTO product VALUES (LAST_INSERT_ID(),?,?,?,?,?,?,?,0);',
    [name, ref, price, weight, category, stock, creationDate],
    (err, results) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      return res.json(results);
    },
  );
});

router.put('/:id', (req, res) => {
  const {
    name, ref, price, weight, category, stock, creationDate, sale,
  } = req.body;
  const date = creationDate.split('T')[0];
  connection.query(
    'UPDATE product SET name = ?, ref = ?, price = ?, weight = ?, category = ?, stock = ?, creation_date = ?, sale = ? WHERE id = ?',
    [name, ref, parseInt(price, 10), parseInt(weight, 10), category,
      parseInt(stock, 10), date, parseInt(sale, 10), parseInt(req.params.id, 10)],
    (err, results) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      return res.json(results);
    },
  );
});

router.delete('/:id', (req, res) => {
  connection.query('DELETE FROM product WHERE id = ?', [req.params.id], (err, results) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.json(results);
  });
});

module.exports = router;
