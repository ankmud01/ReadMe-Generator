// Create a command-line application that dynamically generates a README.md from a user's input. 
// Steps 
    // 1. Prompt user to ask questions
    //     github repo username
    // 2. Make a call to github repo
    //     get image and email address 
    // 3. Prompt user about their Project 
    // 4. Generate a readme file using the aswer from above questions

// 1. Prompting user for github username
var prompt = require("prompt");

//setting up validation for username
var schema = {
    properties: {
      githubusername:{
        pattern: /^[0-9A-Za-z\s\-]+$/,
        message: 'Name must be only letters, numbers, spaces, or dashes',
        required: true
      },
      projecttitle:{
        required: true
      },
      Description:{
          required: true
      },
      TableofContents:{

      },
      Installation:{

      },
      Usage:{

      },
      Contributing:{
        pattern: /^[0-9A-Za-z\s\-]+$/,
        message: 'Name must be only letters, numbers, spaces, or dashes',
      },
      Badges:{

      },
      Tests:{

      },
      Profilepicture:{
        required: true
      },
      githubemail:{
          required: false
      }


    }
};

//Start prompt
prompt.start();

//get github username from the user
prompt.get(schema,function(err,result){
    //get the result in a variable
    console.log("User entered an input");
    // console.log(' username: ' + result.githubusername);
    let username = result.githubusername;
    console.log(' Github username is: ' + username);
});

//2. Making call to github repo