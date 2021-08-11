// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// link 
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Please write a short description of your project.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'is there a License for your project?',
        choices: ['MIT','Apache','None' ]
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'What is your GitHub user name?',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your email address?',
    }, 
     {
        type: 'input',
        name: 'commandToInstall',
        message: 'What command should be run to install dependencies?',
    },
    {
        type: 'input',
        name: 'commandToRunTest',
        message: 'What command dhould be run to run tests ?',
    },
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('README.md', generateMarkdown(data),(err) =>
    err ? console.log(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers =>{
        console.log(answers);
        writeToFile(answers);
    })
}

// Function call to initialize app
init();
