'use strict';

const inquirer = require('inquirer');
const figlet = require('figlet');
const chalk = require('chalk');
const clear = require('clear');
const boxen = require('boxen');

module.exports = {
  initialUserPrompts: () => {
    let questions = [
      {
        name: 'username',
        type: 'input',
        message: 'Please Enter Your User Name:',
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return 'Please Enter Your User Name:';
          }
        },
      },
      {
        name: 'password',
        type: 'password',
        mask: '#',
        message: 'Please Enter your Password',
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return 'Please Enter Your Password';
          }
        },
      },
      {
      name:'keyboardInput',
        type: 'input',
        message: 'Select your keyboard (QWERTY, Dvorak, Colemak) ',
        validate: function(layout){
      if (layout.toLowerCase() === 'qwerty' || layout.toLowerCase() === 'dvorak' || layout.toLowerCase() === 'colemak') {
        return true;
      } else {
        return 'Please Pick a Valid Keyboard Layout';
      }
    },
  },
];
return inquirer.prompt(questions);
},

  welcome: () => {
    clear();
    console.log(
        chalk.blueBright(
            figlet.textSync('SUPERTYPE : REVOLUTION', {font:'ANSI Shadow', horizontalLayout: 'full' })
        ));
    return true;
  }
};


