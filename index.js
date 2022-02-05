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
    message: 'What is your Email address? Email is important incase anyone has any questions.',
    name: 'Enter email address.'
},{
    type: 'input',
    message: 'Please describe what type of test you conducted during your project',
    name: 'Please describe'
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

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {'[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {''}