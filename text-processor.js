const readLineSync = require('readline-sync');
const model = require('./model');

const textProcessor = (commandin) => {
  let command = commandin.split(' ');

  if (command[0] === 'HELP') {
    console.log(model.help());
  }

  if (command[0] === 'CREATE') {
    model.createTable(command[1]);
  }

  if (command[0] === 'PUT' && command[3] === 'IN') {
    model.put(command[1], command[2], command[4]);
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
    model.updateTable(command[1], command[3]);
  }

  if (command[0] === 'UPDATEKEY' && command[2] === 'TO' && command[4] === 'IN') {
    model.updateKey(command[1], command[3], command[5]);
  }

  if (command[0] === 'UPDATEVALUE' && command[2] === 'TO' && command[4] === 'IN') {
    model.updateValue(command[1], command[3], command[5]);
  }

  if (command[0] === 'DELETETABLE') {
    model.deleteByTable(command[1]);
  }

  if (command[0] === 'DELETEBYKEY' && command[2] === 'FROM') {
    model.deleteByKey(command[1], command[3]);
  }

  if (command[0] === 'DELETEBYVALUE' && command[2] === 'FROM') {
    model.deleteByValue(command[1], command[3]);
  }

  if (command[0] === 'SAVE') {
    model.save();
  }

  if (command[0] === 'LOAD') {
    model.load();
  }

  if (command[0] === 'EXIT' || command[0] === 'QUIT') {
    return model.exit();
  }

  console.log('Invalid command.');
};

const inLoop = () => {
  while (true) {
    console.clear();
    console.log('Type HELP for the command list.');
    console.log();
    let commandIn = readLineSync.question('Awaiting commands: ');
    textProcessor(commandIn);
  }
};

module.exports = {
  inLoop: inLoop
};
