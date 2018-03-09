const readLineSync = require('readline-sync');
const model = require('./model');

let loop = true;

const textProcessor = (commandin) => {
  let command = commandin.split(' ');
  if (command[0] === 'CREATE') {
    model.createTable(command[1]);
    return readLineSync.keyIn('Press a key to return.');
  }

  if (command[0] === 'PUT' && command[3] === 'TO') {
    model.put(command[1], command[2], command[4]);
    return readLineSync.keyIn('Press a key to return.');
  }

  if (command[0] === 'GET' && command[2] === 'FROM') {
    console.log(model.get(command[1], command[3]));
    return readLineSync.keyIn('Press a key to return.');
  }

  if (command[0] === 'GETALL') {
    console.log(model.getAll());
    return readLineSync.keyIn('Press a key to return.');
  }

  if (command[0] === 'UPDATETABLE' && command[2] === 'TO') {
    model.updateTable(command[1], command[3]);
    return readLineSync.keyIn('Press a key to return.');
  }

  if (command[0] === 'UPDATEKEY' && command[2] === 'TO' && command[4] === 'IN') {
    model.updateKey(command[1], command[3], command[5]);
    return readLineSync.keyIn('Press a key to return.');
  }

  if (command[0] === 'UPDATEVALUE' && command[2] === 'TO' && command[4] === 'IN') {
    model.updateValue(command[1], command[3], command[5]);
    return readLineSync.keyIn('Press a key to return.');
  }

  if (command[0] === 'DELETETABLE') {
    model.deleteByTable(command[1]);
    return readLineSync.keyIn('Press a key to return.');
  }

  if (command[0] === 'DELETEBYKEY' && command[2] === 'FROM') {
    model.deleteByKey(command[1], command[3]);
    return readLineSync.keyIn('Press a key to return.');
  }

  if (command[0] === 'DELETEBYVALUE' && command[2] === 'FROM') {
    model.deleteByValue(command[1], command[3]);
    return readLineSync.keyIn('Press a key to return.');
  }

  if (command[0] === 'SAVE') {
    return model.save();
  }

  if (command[0] === 'EXIT' || command[0] === 'QUIT') {
    return model.exit();
  }
};

const inLoop = () => {
  while (loop) {
    textProcessor();
  }
};

module.exports = {
  inLoop: inLoop
};
