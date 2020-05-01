// Create a command-line application that dynamically generates a README.md from a user's input. 
// Steps 
// 1. Prompt user to ask questions
//     github repo username
// 2. Make a call to github repo
//     get image and email address 
// 3. Prompt user about their Project 
// 4. Generate a readme file using the aswer from above questions

// 1. Prompting user for github username
const prompt = require("prompt");
const colors = require("colors/safe");
const githubcall = require("./utility/api");
const generatereadme = require("./utility/markdown");
const fs = require("fs");


  //Start prompt
  prompt.start();

//setting up validation for username
prompt.message = colors.blue("Question!");
prompt.delimiter = colors.green("><");

const questions = {
  properties: {
    githubusername: {
      description: colors.red('Please enter your Github Username'),
      pattern: /^[0-9A-Za-z\s\-]+$/,
      message: 'Name must be only letters, numbers, spaces, or dashes',
      required: true
    },
    projecttitle: {
      description: colors.red('What is your Project Title?'),
      type: 'string',
      required: true
    }
    //   projectdescription: {
    //     description: colors.red('Say someting about your project..'),
    //     type: 'string',
    //     required: true
    //   },
    //   installation: {
    //     description: colors.red('How does someone install this project?'),
    //     type: 'string',
    //     default: 'npm install'
    //   },
    //   usage: {
    //     description: colors.red('What will the project be used for?'),
    //     type: 'string'

    //   },
    //   license: {
    //     description: colors.red('Please enter license information for this project'),
    //     type: 'string',
    //     default: 'none provided'
    //   },
    //   collaborators: {
    //     description: colors.red('Please enter name of contributors for this project, if any?'),
    //     type: 'string'
    //   },
    //   tests: {
    //     description: colors.red('How to run test for this project?'),
    //     type: 'string',
    //     default: '$ npm test'
    //   },
    //   contributing: {
    //     description: colors.red('What should contributors know?'),
    //     type: 'string'
    //   }
  }
};

//get github username from the user
prompt.get(questions,
  async function (error, result) {
    try{
      const username = result.githubusername;
      const userresponse = [];
  
      const userProfile = await githubcall(username);
      console.log("User Email Id: " + userProfile.emailid);
      console.log("User Pic URL: " + userProfile.profilepic);
  
      userresponse.push(userProfile, result);
      console.log(userresponse);
  
      const readmefile = await generatereadme(userresponse);
      console.log("This is my readmefile " + readmefile);
  
      return fs.writeFileSync("README.md", readmefile);
    }
    catch(error){
      console.error(error)
    };
  });




