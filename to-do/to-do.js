//Here I create the way of savinf the data on a JSON file
const { throws } = require('assert');
const { error } = require('console');
const fs = require('fs');
let listToDo = [];
const saveDB = () => {
  let data = JSON.stringify(listToDo);
  fs.writeFile('db/data.json', data, (err) => {
    if (err)
      throw new Error(
        'The information could not be saved in the database.',
        err
      );
  });
};
const loadDB = () => {
  try {
    listToDo = require('../db/data.json');
  } catch (error) {
    listToDo = [];
  }
};
const create = (description) => {
  loadDB();

  let toDo = {
    description,
    completed: false,
  };
  listToDo.push(toDo);
  return toDo;
};
const getListing = (c) => {
  loadDB();

  switch (c) {
    case 'all':
      return listToDo;
      break;
    case true:
      let listTrue = listToDo.filter((list) => list.completed === true);
      return listTrue;

      break;

    default:
      let listFalse = listToDo.filter((list) => list.completed !== true);
      return listFalse;
      break;
  }
};
const updating = (description, completed = true) => {
  loadDB();
  let index = listToDo.findIndex((task) => task.description === description);
  if (index >= 0) {
    listToDo[index].completed = completed;
    saveDB();
    return true;
  } else {
    return false;
  }
};
const erased = (description) => {
  loadDB();
  let newList = listToDo.filter((list) => {
    return list.description !== description;
  });
  if (listToDo.length === newList.length) {
    return false;
  } else {
    listToDo = newList;
    saveDB();
    return true;
  }
};

module.exports = {
  create,
  saveDB,
  getListing,
  updating,
  erased,
};
