// utils/generateMarkdown.js (Unsolved Starter)

// TODO: Create helper functions for handling the license section of the README.
// You will likely need:
// - A function that returns a license badge based on which license is passed in
// - A function that returns a license link for the Table of Contents
// - A function that returns the license section text
//

//Gets the link to embed the relevant badge based on the choice the user made
function renderLicenseBadge(license) {
  switch (license) {
    case 'None': 
      return '';
    case 'MIT': 
      return('![MIT License Badge](https://img.shields.io/badge/MIT-License-blue)');
    case 'Apache': 
      return('![Apache License Badge](https://img.shields.io/badge/Apache-License-blue)');
    case 'GNU GPLv3': 
      return('![GNU GPLv3 License Badge](https://img.shields.io/badge/GNU_GPLv3-License-blue)');
    case 'BSD': 
      return('![BSD License Badge](https://img.shields.io/badge/BSD-License-blue)');
    case 'Mozilla': 
      return('![Mozilla License Badge](https://img.shields.io/badge/Mozilla-License-blue)');
    default:
      return('');
  }
}
//
function renderLicenseLink(license) {
//   // TODO: If there is a license, return the Table of Contents link for License.

}
//
// function renderLicenseSection(license) {
//   // TODO: If there is a license, return the License section text.
// }

// TODO: Complete this function to generate the README markdown string
// using the data collected from inquirer.
// The generated README should include sections for:
//
// - Title
// - License badge (if any)
// - Description
// - Table of Contents
// - Installation
// - Usage
// - License (if any)
// - Contributing
// - Tests
// - Questions (GitHub + email)
//
// Use the acceptance criteria and the professional README guide as a reference.

function generateMarkdown(data) {
  // TODO: Use template literals to build the README.md content.
  // Hint: You can call your license helper functions here.

  return `# ${data.title}

<!-- TODO: Add license badge here -->

## Description

${data.description}

<!-- TODO: Add Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions sections -->

`;
}

// TODO: Export the generateMarkdown function so index.js can use it.
module.exports = generateMarkdown;
