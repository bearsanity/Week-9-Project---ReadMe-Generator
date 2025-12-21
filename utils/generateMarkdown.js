
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

//Generates the Markdown file using the helper functions
function generateMarkdown(data) {
  return `# ${data.projectTitle}


${renderLicenseBadge(data.license)}


## Description

${data.projectDescription}


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Installation

${data.installation}


## Usage

${data.usage}


## Credits

${data.credits}


${renderLicenseSection(data.license)}
## Contributing

${data.contribution}


## Tests

${data.tests}


## Questions

If you have any questions - contact me through any of these:

Github: ${data.github}

Email: ${data.email}
`;
}

// TODO: Export the generateMarkdown function so index.js can use it.
module.exports = generateMarkdown;
