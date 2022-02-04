const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generatorMarkdown = require('./util/generateMarkdown');


//inquirer to generate questions 

const questions = [{
    typ: 'Input',
    message: 'What is the title of our project?',
    name: 'Title'

}, {
    type:'Input',
    message:'What is the purpose of your project? Give a description',
    name: 'Descrption'
},{
    type:'input',
    message:'Table of contents',
    name: 'TOC'
},{
    type:'input',
    message: 'What does the user need in order to work with and or install your application',
    name: 'Please explain'
},{
    type: 'input',
    message: 'How do you use your application? Please give a detailed discription',
    name: 'description'
},{
    type: 'input',
    message: 'Is your application heavy on CPU usage?',
    name: 'Hardware requirements in order to install'
},{
    type: 'input',
    message: 'Which License would you like to use for your application? Please choose from the following...',
    name: 'Publice Domain, LGPL, Copyleft, Proprietary'
},{
    type: 'input',
    message: 'What is your GitHub?',
    name: 'Enter GitHub Link'
},{
    type: 'input',
    message: 'What is your Email address?',
    name: 'Enter email address.'
}

}]