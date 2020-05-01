async function generatereadme(userresponse) {
    try {
        console.log("I have entered inside the createread me function...")
        const readmefile =
        `
        [![Buid Status](https://img.shields.io/badge/build-passing-brightgreen?style=plastic)]

        #Project Title
        ${userresponse[1].projecttitle}

        ##Author
        ${userresponse[0].userFullName}
        `;
        return readmefile;
    }
    catch (error) {
        console.error("Cannot create a readmefile because: " + error)
    };
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


// Installation
// ============

// Linux (manual installation)
// ```bash
// $ chmod a+x gh-md-toc
// ```
