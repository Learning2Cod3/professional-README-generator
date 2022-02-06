// TODO: Create a function to generate markdown for README
// function to generate markdown for README

function generateMarkdown(data) {
    return `
# ${data.title}
# Description
${data.description}
# Table of Contents 
* [installation](#installation)
* [usage](#usage)
* [License](#license)
* [contributing](#contributing)
* [tests](#tests)
* [contact](#contact)
* [github](#github)
* [questions](#questions)
# Installation
The following necessary dependencies must be installed to run the application properly: ${data.installation}
# Usage
In order to use this app you need: ${data.usage}
# License
This project is licensed under the ${data.license} license. 
([![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
# contributing
contributing: ${data.contributing}
# Tests
The following is needed to run the test: ${data.tests}
# Contact
If you would like any additional detail, please follow the instructions on how you can reach out: ${data.contact}
# Questions
Github username: https://github.com/${data.github}/${data.title}

If you have any questions about the repo, open an issue or have general questions you can reach me directly at: ${data.email} 
`
};

module.exports = generateMarkdown;

