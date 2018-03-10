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

const help = () => {
  console.log('Here are the commands:                               (Uppercase is important!)');
  console.log();
  console.log('GETALL                                               --> Shows the whole database.');
  console.log('CREATE <tablename>                                   --> Creates a new table.');
  console.log('PUT <key> <value> IN <tablename>                     --> Puts a new key-value pair into the selected table.');
  console.log('GET <key> FROM <tablename>                           --> Shows the value of a key in the selected table.');
  console.log();
  console.log('UPDATETABLE <tablename> TO <newTablename>            --> Updates the tablename.');
  console.log('UPDATEKEY <key> TO <newKey> IN <tablename>           --> Updates the key in the selected table.');
  console.log('UPDATEVALUE <value> TO <newValue> IN <tablename>     --> Updates the value in the selected table.');
  console.log();
  console.log('DELETETABLE <tablename>                              --> Deletes the selected table.');
  console.log('DELETEKEY <key> IN <tablename>                       --> Deletes the key in the selected table.');
  console.log('DELETEVALUE <value> IN <tablename>                   --> Deletes the value in the selected table.');
  console.log();
  console.log('SAVE                                                 --> Saves the database into a file.');
  console.log('LOAD                                                 --> Loads the last saved database.');
  console.log('EXIT or QUIT                                         --> Exit the program.');
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
  exit: exit,
  help: help
};
