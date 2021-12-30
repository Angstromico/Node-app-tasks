//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do');
const colors = require('colors');
let command = argv._[0];
switch (command) {
  case 'create':
    let task = toDo.create(argv.description);
    console.log(task);
    toDo.saveDB();
    break;
  case 'listing':
    let listing = toDo.getListing(argv.completed);

    for (let element of listing) {
      console.log('======== To Do ========='.green);
      console.log(element.description);
      console.log('State: ', element.completed);
      console.log('========================'.green);
    }
    break;
  case 'update':
    let updating = toDo.updating(argv.description, argv.completed);
    console.log(updating);
    break;
  case 'delete':
    let erased = toDo.erased(argv.description);
    console.log(erased);
    break;
  default:
    console.log('Unrecognized command');
}
