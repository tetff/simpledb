const indexDB = require('./index');

const get = (key) => {
  return indexDB.database.find((entry) => {
    return entry.key === key;
  });
};

const getAll = () => {
  return indexDB.database;
};

const create = (newKey, newValue) => {
  let entry = {newKey: newValue};
  indexDB.database.push(entry);
  return entry;
};

const update = (key, newValue) => {
  let entry = get(key);
  entry.key = newValue;
  return entry;
};

const destroy = (key) => {
  let entry = get(key);
  let index = indexDB.database.indexOf(entry);
  return indexDB.database.splice(index, 1);
};

module.exports = {
  get: get,
  getAll: getAll,
  create: create,
  update: update,
  delete: destroy
};
