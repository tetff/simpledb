const express = require('express');
const dataMate = express();
const model = require('./model');

let getAll = (req, res) => {
  res.json(model.getAll());
};
dataMate.get('/', getAll);

let get = (req, res) => {
  let table = req.params.table;
  let key = req.params.key;
  res.json(model.get(key, table));
};
dataMate.get('/:table/:key', get);

let createTable = (req, res) => {
  let table = req.query.data;
  model.createTable(table);
  res.json({table: table, action: 'created'});
};
dataMate.post('/', createTable);

let put = (req, res) => {
  let table = req.params.table;
  let key = req.query.key;
  let value = req.query.value;
  model.put(key, value, table);
  res.json(model.get(key, table));
};
dataMate.post('/:table', put);

let update = (req, res) => {
  let key = parseInt(req.params.key);
  let newValue = req.query.data;
  let newData = model.update(key, newValue);
  res.json(newData);
};
dataMate.put('/:key', update);

let destroy = (req, res) => {
  let key = parseInt(req.params.key);
  res.json(model.delete(key));
};
dataMate.delete('/:key', destroy);

module.exports = dataMate;
