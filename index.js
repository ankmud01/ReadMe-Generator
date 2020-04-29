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
const axios = require("axios");
require("dotenv/config");

//setting up validation for username
const questions = {
    properties: {
      githubusername:{
        description: 'Enter your Github Username',
        pattern: /^[0-9A-Za-z\s\-]+$/,
        message: 'Name must be only letters, numbers, spaces, or dashes',
        required: true
      },
      projecttitle:{
        description: 'Enter your Project Title',
        type: 'string',
        required: true
      }
    //   projectdescription:{
    //     description: 'Say someting about your project',
    //     type: 'string',
    //     // default: 'none provided'
    //   },
    //   tableofContents:{
    //         description: "Enter Table of Contents",
    //   },
    //   installation:{

    //   },
    //   usage:{

    //   },
    //   contributing:{
    //     pattern: /^[0-9A-Za-z\s\-]+$/,
    //     message: 'Name must be only letters, numbers, spaces, or dashes',
    //   },
    //   badges:{

    //   },
    //   tests:{

    //   },
    //   profilepicture:{
    //     required: true
    //   },
    //   githubemail:{
    //       required: false
    //   }


    }
};


//get github username from the user
prompt.get(questions,function(err,result){
    //get the result in a variable
    // console.log("User entered an input");
    // console.log(' username: ' + result.githubusername);
    let username = result.githubusername;
    console.log(' Github username is: ' + username);

    //2. Making call to github repo using axios
    //need to npm install axios using npm
    // npm i axios
    //find the github api call url and the correct endpoint to pass the username
    const githuburl = `https://api.github.com/users/${username}`;
    // console.log ("My URL is " + githuburl);
    axios.get(githuburl,{
        headers:{
            'Authorization': `token ${process.env.TOKEN}`
        }
    })
      .then((response) => {
        console.log(response.data);
        const{name,avatar_url,repos_url,email} = response.data;    //This is es6 and if you assign a variable that is not identical to the name of the property in response.data, it will return undefined
        const userProfile = {                                      //Assining the propery from above into a const object
            "userFullName":name,
            "profilepic":avatar_url,
            "repos":repos_url,
            "emailid":email
        };
        console.log("Name: " + userProfile.userFullName);
        console.log ("Profile pic: " + userProfile.profilepic);
        console.log ("Repositories: " + userProfile.repos);
        console.log ("Email: " + userProfile.emailid);
      })
      .catch(function (error) {
        console.log(error);
      });
    // axios({
    // method: 'get',
    // url: 'https://api.github.com/users/username'
    // })
});

//Start prompt
prompt.start();





