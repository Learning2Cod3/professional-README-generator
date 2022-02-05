const inquirer = require("inquirer");
const util = require('util');
const fs = require('fs');


const generateMarkdown = require('./util/generateMarkdown.js');




//inquirer to generate questions 

const questions = [{
    typ: 'Input',
    message: 'What is the title of our project?',
    name: 'Title'

}, {
    type:'Input',
    message:'Please give a brief description of your project',
    name: 'Description'
},{
    type:'input',
    message:'Table of contents',
    name: 'Table of contents'
},{
    type:'input',
    message: 'What are the installation requirements in order for a user to use your application?',
    name: 'Installation'
},{
    type: 'input',
    message: 'Please give the user a description on how the application works' ,
    name: 'Usage'
},{
    type: 'input',
    message: 'What License did you use for this porject?',
    name: 'License'
},{
    type: 'input',
    message: 'Did anyone contribute to this project? If so, please describe?',
    name: 'contributing'
},{
    type: 'input',
    message: 'What commands are required in order to test this application?',
    name: 'Tests'
},{
    type: 'input',
    message: 'Please provide instructions on how someone can reach out',
    name: 'Questions.'
},{
    type: 'input',
    message: 'What is your GITHUB username?',
    name: 'questions'
},{
    type:'input',
    message:'What is your email?',
    name: 'Questions'
}

];



// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }
    })

}





// function to finalize program
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile('README.md', generateMarkdown(data));
            console.log(data)

        })

}

// function call to initialize program
init();
