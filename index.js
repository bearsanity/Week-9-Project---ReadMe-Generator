// 02-Challenge — Professional README Generator

// - fs for writing files
// - inquirer for collecting user input
// - the generateMarkdown function from ./utils/generateMarkdown

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')


//Questions to get neccesary data to create ReadMe
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
    message:'Please list any credits you would like to include.'
  }
];

//Used to create and name the md file, then send the result of the generateMarkdown function to said md file
function writeToFile(filename, data) {
  fs.writeFile(filename, data, err =>{
          if(err) {
              console.log('Error:', err);
          };
          return;
      })
};

//Asks neccesary questions then handles the data and creates the MD file
function initializeApp() {
  inquirer
    .prompt(questions)
    .then(data => {
      const filename = `README.md`;
      writeToFile(filename, generateMarkdown(data))
    })
    .catch(err => console.error('Prompt error: ', err))
  };

initializeApp();