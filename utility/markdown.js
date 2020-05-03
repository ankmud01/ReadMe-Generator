const fs = require("fs");

function generatereadme(data) {
    const readmefile =
        `![Build Status](https://img.shields.io/badge/build-passing-brightgreen?style=plastic)

# Project-Title: 
${data.projecttitle}

## Author: 
${data.author}

## Table of Contents
=====================
* [Installation](#installation)
* [License](#license)
* [Usage](#usage)
* [Contributors](#contributors)
* [Test](#test)
* [Contributing](#contributing)
* [Questions](#questions)

## Installation
To install necessary dependencies, run the following command:<br>
\`\`\`
${data.installation}
\`\`\`

## License
${data.license}

## Usage
${data.usage}

## Collaborators
${data.collaborators}

## Test
To run test, run the following comand:<br>
\`\`\`
${data.tests}
\`\`\`

## Contributing
${data.contributing}

## Questions

<img src="${data.avatar_url}" alt="ME" width="150" height="150"><br>
if you have any questions about the repo contact me directly at ${data.emailid} thank you.<br>
If you want to see more of my work please click here ${data.repos}.

`
        ;
    return readmefile;
}
module.exports = generatereadme;
