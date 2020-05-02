const fs = require("fs");
// const util = require("util");
// const writeReadme = util.promisify(fs.writeFile);

async function generatereadme(data) {
    const readmefile = 
    // return
`![Build Status](https://img.shields.io/badge/build-passing-brightgreen?style=plastic)

# Project-Title: 
   > ${data.projecttitle}

## Author: 
   > ${data.author}
` 
;
    return readmefile;
    // return writeReadme("README.md", readmefile);
    // ![License](https://img.shields.io/badge/License-${data.license}-blue)
    // ## Discription
    
    // ${data.discription}
    // ## Table of Contents
    // * [Installation](#installation)
    // * [Usage](#usage)
    // * [License](#license)
    // * [Contributing](#contributing)
    // * [Tests](#tests)
    // * [Questions](#questions)
    // ## Installation
    // To install necessary dependencies, run the following command:
    // ${data.dependencies}
    // ## Usage
    // ${data.know}
    // ## License
    // ${data.license}
    // ## Contributing
    // ${data.repo}
    // ## Test
    // To run test, run the following comand:
    // ${data.test}
    // ## Questions
    
    // ![ME](${getUserResponse.data.avatar_url}) 
    // if you have any questions about the repo contact me directly at ${getUserResponse.data.email} thank you.
    // `;

}
module.exports = generatereadme;

// [![Build Status](https://travis-ci.org/ekalinin/github-markdown-toc.svg?branch=master)](https://travis-ci.org/ekalinin/github-markdown-toc)

// Table of contents
// =================

// <!--ts-->
//    * [gh-md-toc](#gh-md-toc)
//    * [Table of contents](#table-of-contents)
//    * [Installation](#installation)
//    * [Usage](#usage)
//       * [STDIN](#stdin)
//       * [Local files](#local-files)
//       * [Remote files](#remote-files)
//       * [Multiple files](#multiple-files)
//       * [Combo](#combo)
//       * [Auto insert and update TOC](#auto-insert-and-update-toc)
//       * [GitHub token](#github-token)
//    * [Tests](#tests)
//    * [Dependency](#dependency)
// <!--te-->
