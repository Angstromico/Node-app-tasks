# App Tasks Node

### First you need to install the NPM Packages

## npm install

#### This is a app made it on Node.js, is a very basic app that I do to learn the fundamentals of Node.js

## Intructions:

#### This application works with commands in the terminal. The commands are as follows:

#### node app 'create' -d 'Name of the Task you want to Create'

This return on console the object with the name of the task and the state of it, the state is always false that's because it's supposed to be a to-do task what are pending to be done.

#### node app 'listing' -c 'all'

Shows all pending tasks saved in the database which is a .JSON file

#### node app 'listing'

This command show only the tasks that are mark as completed

#### node app 'listing' 'Put here any word that are not "all" or true'

This command show only the tasks that are mark as not completed

#### node app 'update' -d 'Name of the Task you want to Update' -c true

This command update to true or false the state of one of the tasks on the list, of the task does not exists return false, if the task exist then return true

#### node app 'delete' -d 'Name of the Task you want to Eliminate'

If the task exist on the list return true if not return false
