const readLineSync = require('readline-sync');
const CLIController = require('./CLI');
let CLI = readLineSync.promptCLLoop({
  SAVE: CLIController.save(),
  GET: CLIController.get(),
  CREATE: CLIController.createTable(),
  PUT: CLIController.put(),
  DELETEBYVALUE: CLIController.deleteByValue(),
  DELETEBYKEY: CLIController.deleteByKey()
});

module.exports = CLI;
