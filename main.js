#! /usr/bin/env node

const { Command } = require('commander');
const program = new Command();

program
  .name('node-commander-template')
  .description('A node CLI app that uses commander.js')
  .version('0.0.1');

program.command('hello')
  .description('Prints a gretting message')
  .argument('<name>', 'The name of the person to greet')
  .option('--capitalize', 'Flag to capitalize the greeting')
  .action((str, options) => {
      var message = "Hello, " + str + "!"
      console.log(options.capitalize ? message.toUpperCase() : message);
    });

program.parse();
