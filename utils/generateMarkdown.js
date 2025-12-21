// utils/generateMarkdown.js (Unsolved Starter)

// TODO: Create helper functions for handling the license section of the README.
// You will likely need:
// - A function that returns a license badge based on which license is passed in
// - A function that returns a license link for the Table of Contents
// - A function that returns the license section text

//Object of license options to reduce length of related functions
const licenseOptions = {
  None: {
    badge:'',
    tocLink:'',
    url:''
  },
  MIT: {
    badge:'![MIT License Badge](https://img.shields.io/badge/License-MIT-blue)',
    tocLink:'- [License](#License)',
    url:'https://opensource.org/licenses/MIT'
  },
  Apache: {
    badge:'![Apache License Badge](https://img.shields.io/badge/License-Apache-blue)',
    tocLink: '- [License](#License)',
    url: 'https://www.apache.org/licenses/LICENSE-2.0'
  },
  "GNU GPLv3": {
    badge:'![GNU GPLv3 License Badge](https://img.shields.io/badge/License-GNU_GPLv3-blue)',
    tocLink: '- [License](#License)',
    url: 'https://www.gnu.org/licenses/gpl-3.0.en.html'
  },
  BSD: {
    badge: '![BSD License Badge](https://img.shields.io/badge/License-BSD-blue)',
    tocLink: '- [License](#License)',
    url: 'https://opensource.org/licenses/BSD-3-Clause'
  },
  Mozilla: {
    badge: '![Mozilla License Badge](https://img.shields.io/badge/License-Mozilla-blue)',
    tocLink: '- [License](#License)',
    url: 'https://www.mozilla.org/en-US/MPL/2.0/'
  }
};
//Gets the link to embed the relevant badge based on the choice the user made
function renderLicenseBadge(license) {
  if (license === 'None' || !license) {
    return '';
  } else {
    return licenseOptions[license].badge;
  }
};

//Creates link to license section for table of contents
function renderLicenseLink(license) {
  if (license === 'None' || !license) {
    return '';
  } else {
    return licenseOptions[license].tocLink
  }
};
//Creates the text for the license section fo the markdown
function renderLicenseSection(license) {
  if (license === 'None' || !license) {
    return '';
  } else {
    return `## License

This project is licensed under the terms of the **${license} License**. Try [here](${licenseOptions[license].url}), for more information on the license.
`
  }
};

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
