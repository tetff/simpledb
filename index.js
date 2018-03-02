/* Simple database
- Store data in object, these called "table"s right now. PIPPA
- Get: write a function which gets a key and the name of the table and returns the value. PIPPA
- Put: write a function which gets a key, value and the name of the table and puts it into the table as key:value. PIPPA
- DeleteByKey: write a function which gets a key and the name of the table and delete the value belongs to the key from the table. PIPPA
- DeleteByValue: write a function which gets a value and the name of the table and delete it from the table. PiPPA
- Create table: write a function which gets the name of the table and create it (add it to the list of tables). PIPPA
For the solution you have to use the object supported by the Javascript, more info:
https://www.xul.fr/javascript/associative.php
Helps:
1.
The whole datastore should look like:
var database = new Object();
2.
Create table:
function createTable(tableName) {var readlineSync = require('readline-sync'),
    database[tableName] = new Object(); // or something similar
}
3.
Put:
function put(tableName, key, value) {
    table[key] = value
}
4.
Do it yourself. */

const readlineSync = require('readline-sync');
const dataMate = require('./controllers/webUI');
const CLI = require('./CLI');
let database = [];

const selector = () => {
  console.clear();
  console.log('Welcome to DataMate 2018!');
  let selectorOptions = ['Command Line Interface', 'Online database'];
  let selectorOption = readlineSync.keyInSelect(selectorOptions, 'Which enviroment would you like to use?');
  switch (selectorOption) {
    case 0:
      console.clear();
      break;
    case 1:
      console.clear();
      console.log('Server running on port 8000.');
      break;
    default:
      if (readlineSync.keyInYN('Do you want to exit?')) {
        process.exit();
      }
      break;
  }
};

CLI.load();
dataMate.listen(8000);
dataMate.put(database);
selector();

module.exports = {
  database: database
};
