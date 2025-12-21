// 02-Challenge — Professional README Generator (Unsolved Starter)

// TODO: Import the required packages:
// - fs for writing files
// - inquirer for collecting user input
// - the generateMarkdown function from ./utils/generateMarkdown

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input.
// Each question should collect part of the README content:
// - GitHub username
// - Email address
// - Project title
// - Project description
// - License (choose from a list)
// - Installation command
// - Test command
// - Usage information
// - Contribution guidelines
//
// Example shape of a question:
// {
//   type: "input",
//   name: "github",
//   message: "What is your GitHub username?",
// }

const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?'
  },
  {
    type:'input',
    name:'email',
    message:'What is your email address?'
  },
  {
    type:'input',
    name:'projectTitle',
    message:'What is the title of your project?'
  },
  {
    type:'input',
    name:'projectDescription',
    message:'Please provide a description for your project.'
  },
  {
    type:'list',
    name:'license',
    message:'Please choose a license.',
    choices: ['MIT', 'Apache', 'GNU GPLv3', 'BSD', 'Mozilla', 'None']
  },
  {
    type:'input',
    name:'installation',
    message:'Please provide the installation command.'
  },
  {
    type:'input',
    name:'tests',
    message:'Please provide any test commands.'
  },
  {
    type:'input',
    name:'usage',
    message:'Please provide the usage information.'
  },
  {
    type:'input',
    name:'contribution',
    message:'Please provide the contribution guidelines.'
  },
  {
    type:'input',
    name:'credits',
    message:'Please list anything you would like to credit'
  }
];

// TODO: Create a function to write the README file.
// It should take a file name and the data to write.
// Use fs.writeFile or fs.writeFileSync inside this function.
//const filename = `${data.projectDescription.toLowerCase().replace(/ /g, '')}.json`;
function writeToFile(filename, data) {
  // TODO: Implement this function so it writes "data" to "fileName"
  fs.writeFile(filename, data, err =>{
          if(err) {
              console.log('Error:', err);
          };
          return;
      })
};

// TODO: Create a function to initialize the app.
// Inside it:
// 1. Prompt the user with inquirer.prompt(questions)
// 2.
function initializeApp() {
  inquirer
    .prompt(questions)
    .then(data => {
      const filename = `${data.projectTitle.toLowerCase().replace(/ /g, '')}.md`;
      writeToFile(filename, generateMarkdown(data))
    })
    .catch(err => console.error('Prompt error: ', err))
  };

initializeApp();