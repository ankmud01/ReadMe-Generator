// 1. Prompting user for github username
const prompt = require("prompt");
const colors = require("colors/safe");
const githubcall = require("./utility/api");
const generatereadme = require("./utility/markdown");
const fs = require("fs");
const util = require("util");
const writeReadme = util.promisify(fs.writeFile);


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
    },
    projectdescription: {
      description: colors.red('Say someting about your project..'),
      type: 'string',
      required: true
    },
    installation: {
      description: colors.red('How does someone install this project?'),
      type: 'string',
      default: 'npm install'
    },
    usage: {
      description: colors.red('What will the project be used for?'),
      type: 'string'

    },
    license: {
      description: colors.red('Please enter license information for this project'),
      type: 'string',
      default: 'none provided'
    },
    collaborators: {
      description: colors.red('Please enter name of contributors for this project, if any?'),
      type: 'string'
    },
    tests: {
      description: colors.red('How to run test for this project?'),
      type: 'string',
      default: '$ npm test'
    },
    contributing: {
      description: colors.red('What should contributors know?'),
      type: 'string'
    }
  }
};

//get github username from the user
prompt.get(questions,
  async function (error, result) {
    try {
      const username = result.githubusername;
      // const userresponse = [];

      const userProfile = await githubcall(username);
      console.log("User Email Id: " + userProfile.emailid);
      console.log("User Pic URL: " + userProfile.profilepic);

      // userresponse.push(userProfile, result);
      // console.log(userresponse);
      const data = {
        projecttitle: result.projecttitle,
        author: userProfile.userFullName,
        projectdescription: result.projectdescription,
        installation: result.installation,
        usage: result.usage,
        license: result.license,
        collaborators: result.collaborators,
        tests: result.tests,
        contributing: result.contributing,
        emailid: userProfile.emailid,
        avatar_url: userProfile.profilepic,
        repos: userProfile.repos
      }

      const readmefile = await generatereadme(data);
      console.log("This is my readmefile " + readmefile);

      // return readmefile;

      return writeReadme("README.md", readmefile);
    }
    catch (error) {
      console.error(error)
    };
  });




