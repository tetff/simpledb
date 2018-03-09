const fileManager = require('fs');
const indexDB = require('./index');

function save () {
  fileManager.writeFileSync('db.json', JSON.stringify(indexDB.database), 'utf-8');
  console.log('Database has been saved');
}

function load () {
  indexDB.database = JSON.parse(fileManager.readFileSync('db.json', 'utf-8'));
  return indexDB.database;
}

function createTable (tableName) {
  indexDB.database[tableName] = {};
  console.log(tableName, 'table has been created.');
}

function put (key, value, tableName) {
  indexDB.database[tableName][key] = value;
  console.log(key, value, 'key value pair has been inserted into', tableName + '.');
}

function get (key, tableName) {
  let data = '';
  data = indexDB.database[tableName][key];
  return data;
}

const getAll = () => {
  return indexDB.database;
};

const updateTable = (tableName, newTableName) => {
  let temp = '';
  temp = indexDB.database[tableName];
  indexDB.database[newTableName] = temp;
  console.log('Table', tableName, 'has been updated to', newTableName + '.');
};

const updateKey = (key, newKey, tableName) => {
  let temp = '';
  temp = indexDB.database[tableName][key];
  indexDB.database[tableName][key] = temp;
  console.log('Entry with the key', key, 'has been updated to', newKey, 'in the', tableName, 'table.');
};

const updateValue = (value, newValue, tableName) => {
  for (let i in indexDB.database[tableName]) {
    if (indexDB.database[tableName][i] === value) {
      indexDB.database[tableName][i] = newValue;
      console.log('Entry with the value', value, 'has been updated to', newValue, 'in the', tableName, 'table.');
    }
  }
};

const deleteByTable = (tableName) => {
  delete indexDB.database[tableName];
  console.log('Table', tableName, 'has been deleted.');
};

function deleteByKey (key, tableName) {
  delete indexDB.database[tableName][key];
  console.log('Entry with the key', key, 'has been deleted from', tableName + '.');
}

function deleteByValue (value, tableName) {
  for (let i in indexDB.database[tableName]) {
    if (indexDB.database[tableName][i] === value) {
      delete indexDB.database[tableName][i];
      console.log('Entry with the value', value, 'has been deleted from', tableName + '.');
    }
  }
}

const exit = () => {
  process.exit();
};

module.exports = {
  save: save,
  load: load,
  get: get,
  getAll: getAll,
  put: put,
  createTable: createTable,
  updateTable: updateTable,
  updateKey: updateKey,
  updateValue: updateValue,
  deleteByTable: deleteByTable,
  deleteByKey: deleteByKey,
  deleteByValue: deleteByValue,
  exit: exit
};
