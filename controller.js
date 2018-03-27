const express = require('express');
const dataMate = express();
const model = require('./model');

let getAll = (req, res) => {
  res.json(model.getAll());
};
dataMate.get('/', getAll);

let help = (req, res) => {
  res.send(model.help());
};
dataMate.get('/help', help);

let get = (req, res) => {
  let table = req.params.table;
  let key = req.params.key;
  res.json(model.get(key, table));
};
dataMate.get('/:table/:key', get);

let getTable = (req, res) => {
  let table = req.params.table;
  res.json(model.getTable(table));
};
dataMate.get('/:table', getTable);

let createTable = (req, res) => {
  let table = req.query.table;
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

let updateTable = (req, res) => {
  let table = req.params.table;
  let newTable = req.query.table;
  model.updateTable(table, newTable);
  res.json({table: table, newTable: newTable, action: 'updated'});
};
dataMate.put('/:table', updateTable);

let updateKey = (req, res) => {
  let table = req.params.table;
  let key = req.params.key;
  let newKey = req.query.key;
  model.updateKey(key, newKey, table);
  res.json({key: key, newKey: newKey, action: 'updated'});
};
dataMate.put('/:table/:key', updateKey);

let updateValue = (req, res) => {
  let value = req.params.value;
  let newValue = req.query.data;
  let table = req.params.table;
  model.updateValue(value, newValue, table);
  res.json({value: value, newValue: newValue, action: 'updated'});
};
dataMate.put('/:table/:value', updateValue);

let destroyTable = (req, res) => {
  let table = req.params.key;
  model.deleteByTable(table);
  res.json({table: table, action: 'deleted'});
};
dataMate.delete('/:table', destroyTable);

let destroyKey = (req, res) => {
  let table = req.params.table;
  let key = req.params.key;
  model.deleteByKey(key, table);
  res.json({key: key, action: 'deleted'});
};
dataMate.delete('/:table/:key', destroyKey);

let destroyValue = (res, req) => {
  let table = req.params.table;
  let value = req.params.value;
  model.deleteByValue(value, table);
  res.json({value: value, action: 'deleted'});
};
dataMate.delete('/:table/:value', destroyValue);

module.exports = dataMate;
