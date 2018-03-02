const express = require('express');
const dataMate = express();
const webUIModel = require('./../model/webUI');

let index = (req, res) => {
  res.json(webUIModel.getAll());
};
dataMate.get('/', (index));

let key = (req, res) => {
  let key = parseInt(req.params.key);
  res.json(webUIModel.get(key));
};
dataMate.get('/:key', (key));

let newD = (req, res) => {
  let key = parseInt(req.params.key);
  res.json({action: 'new', key: key});
};
dataMate.get('/:key/new', (newD));

let create = (req, res) => {
  let newKey = req.query.data;
  let newValue = req.query.data;
  res.json(webUIModel.create(newKey, newValue));
};
dataMate.post('/', (create));

let edit = (req, res) => {
  let key = parseInt(req.params.key);
  res.json({action: 'edit', key: key});
};
dataMate.get('/:key/edit', (edit));

let update = (req, res) => {
  let key = parseInt(req.params.key);
  let newValue = req.query.data;
  let newData = webUIModel.update(key, newValue);
  res.json(newData);
};
dataMate.put('/:key', (update));

let destroy = (req, res) => {
  let key = parseInt(req.params.key);
  res.json(webUIModel.delete(key));
};
dataMate.delete('/:key', (destroy));

module.exports = dataMate;
