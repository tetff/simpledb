const readlineSync = require('readline-sync');
const fileManager = require('fs');
const indexDB = require('./index');

let tableName;
let key;
let value;

function save () {
  fileManager.writeFileSync('db.json', JSON.stringify(indexDB.database), 'utf-8');
}

function load () {
  indexDB.database = JSON.parse(fileManager.readFileSync('db.json', 'utf-8'));
  return indexDB.database;
}

function createTable () {
  tableName = readlineSync.question('What is the name of the table you would like to create?');
  indexDB.database[tableName] = {};
  console.log('New table succesfully created.');
  readlineSync.keyIn('Press a key to return to the main menu.');
}

function put () {
  key = readlineSync.question('Please enter a new key name.');
  value = readlineSync.question('Please enter the corresponding value.');
  indexDB.database[tableName][key] = value;
  console.log('New entry succesfully created.');
  readlineSync.keyIn('Press a key to return to the main menu.');
}

function get () {
  key = readlineSync.question('Please enter the name fo the key you are looking for.');
  let data = '';
  data = indexDB.database[tableName][key];
  return data;
}

function deleteByKey () {
  key = readlineSync.question('Please enter the name of the key you would like to delete.');
  delete indexDB.database[tableName][key];
  for (let i in indexDB.database) {
    if (indexDB.database[i] === tableName) {
      delete indexDB.database[i][key];
      console.clear();
      console.log('Entry succesfully deleted.');
      readlineSync.keyIn('Press a key to return to the main menu.');
    }
  }
}

function deleteByValue () {
  value = readlineSync.question('Please enter the name of the value you would like to delete.');
  for (let i in indexDB.database[tableName]) {
    if (indexDB.database[tableName][i] === value) {
      delete indexDB.database[tableName][i];
      console.clear();
      console.log('Entry succesfully deleted.');
      readlineSync.keyIn('Press a key to return to the main menu.');
    }
  }
}

module.exports = {
  save: save,
  load: load,
  get: get,
  put: put,
  createTable: createTable,
  deleteByKey: deleteByKey,
  deleteByValue: deleteByValue
};
