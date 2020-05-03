// 1. Prompting user for github username
const inquirer = require("inquirer");
const githubcall = require("./utility/api");
const generatereadme = require("./utility/markdown");
const fs = require("fs");
const util = require("util");
const writeReadme = util.promisify(fs.writeFile);
const figlet = require("figlet");
const chalk = require("chalk");

//Questions to create Readme file
const questions = [
  {
    type: 'input',
    name: 'githubusername',
    message: 'Please enter your Github Username.',
    validate: function (value) {
      let pass = value.match(
        /^[0-9A-Za-z\s\-]+$/
      );
      if (pass) {
        return true;
      }
      return 'Name must be only letters, numbers, spaces, or dashes';
    }

  },
  {
    type: 'input',
    name: 'projecttitle',
    message: 'What is your Project Title?',
    validate: function (value) {
      let pass = value.match(
        /^(?!\s*$).+/
      );
      if (pass) {
        return true;
      }
      return 'Please enter your project title';
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How does someone install this project?',
    default: 'npm install'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please select a license for this project.',
    choices: ['Apache 2.0', 'GNU AGPLv3', 'GNU GPLv3', 'GPLv3', 'MIT', 'Mozilla Public License 2.0', 'The Unlicense']
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What will the project be used for?'
  },
  {
    type: 'input',
    name: 'collaborators',
    message: 'Please enter name of all contributors for this project separated by comma?'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How to run test for this project?',
    default: 'npm test'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What should people who want to contribute to your project know?'
  },
];

console.clear();
console.log(
  chalk.greenBright(
    figlet.textSync('I m Readme_Generator', {
      font: 'Star Wars',
      horizontalLayout: 'default',
      verticalLayout: 'default'
    })
  )
);

//Prompt function aling with async function to get username and writefile
inquirer.prompt(questions).then(result => {
  try {
    //making async call to github
    async function filecreate() {
      const username = result.githubusername;
      const userProfile = await githubcall(username);

      //putting all the results from call(useprofile) and result from prompt into an object
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
      };

      //generating readme file
      const readmefile = generatereadme(data);
      // console.log("This is my readmefile " + readmefile);

      return writeReadme("README.md", readmefile);
    }
    filecreate();
    
    function thankyou() {
      console.clear();
      console.log(
        chalk.greenBright(
          figlet.textSync('Thank You for Using' + '\n' + 'ReadMe Generator!!!', {
            font: 'Star Wars',
            horizontalLayout: 'default',
            verticalLayout: 'default'
          })
        )
      )
    };
    thankyou();
  }
  catch (error) {
    console.error(error);
  }
});





