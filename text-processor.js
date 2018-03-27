const readLineSync = require('readline-sync');
const model = require('./model');

const textProcessor = (commandin) => {
  let command = commandin.split(' ');

  if (command[0] === 'HELP') {
    console.log(model.help());
  }

  if (command[0] === 'CREATE') {
    console.log(model.createTable(command[1]));
  }

  if (command[0] === 'PUT' && command[3] === 'IN') {
    console.log(model.put(command[1], command[2], command[4]));
  }

  if (command[0] === 'GET' && command[2] === 'FROM') {
    console.log(model.get(command[1], command[3]));
  }

  if (command[0] === 'GET') {
    console.log(model.getTable(command[1]));
  }

  if (command[0] === 'GETALL') {
    console.log(model.getAll());
  }

  if (command[0] === 'UPDATETABLE' && command[2] === 'TO') {
    console.log(model.updateTable(command[1], command[3]));
  }

  if (command[0] === 'UPDATEKEY' && command[2] === 'TO' && command[4] === 'IN') {
    console.log(model.updateKey(command[1], command[3], command[5]));
  }

  if (command[0] === 'UPDATEVALUE' && command[2] === 'TO' && command[4] === 'IN') {
    console.log(model.updateValue(command[1], command[3], command[5]));
  }

  if (command[0] === 'DELETETABLE') {
    console.log(model.deleteByTable(command[1]));
  }

  if (command[0] === 'DELETEBYKEY' && command[2] === 'FROM') {
    console.log(model.deleteByKey(command[1], command[3]));
  }

  if (command[0] === 'DELETEBYVALUE' && command[2] === 'FROM') {
    console.log(model.deleteByValue(command[1], command[3]));
  }

  if (command[0] === 'SAVE') {
    console.log(model.save());
  }

  if (command[0] === 'LOAD') {
    console.log(model.load());
  }

  if (command[0] === 'EXIT' || command[0] === 'QUIT') {
    return model.exit();
  }

  console.log('Invalid command.');
};

const inLoop = () => {
  console.log('Type HELP for the command list.');
  console.log();
  while (true) {
    let commandIn = readLineSync.question('Awaiting commands: ');
    textProcessor(commandIn);
  }
};

module.exports = {
  inLoop: inLoop
};
