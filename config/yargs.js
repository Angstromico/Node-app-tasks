const description = {
  demand: true,
  alias: 'd',
  desc: 'Command for updating',
};
const completed = {
  default: true,
  alias: 'c',
  desc: 'Label the task as completed or incompleted',
};
const argv = require('yargs')
  .command('create', 'Create a new task for the app', {
    description,
  })
  .command('update', 'Updating a task on our app', {
    description,
    completed,
  })
  .command('delete', 'Delete a task from the database', {
    description,
  })
  .command('listing', 'Show a list of the tasks on the app', {
    completed,
  })
  .help().argv;
module.exports = {
  argv,
};
