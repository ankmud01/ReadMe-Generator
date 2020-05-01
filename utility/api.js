const axios = require("axios");
require("dotenv/config");

 //2. Making call to github repo using axios
  async function githubcall(username){
    const githuburl = `https://api.github.com/users/${username}`;
    try{
     const response = await axios.get(githuburl,{
            headers:{
                Authorization:`token ${process.env.TOKEN}`
            }
        });
        const{name,avatar_url,repos_url,email} = response.data;  //This is es6 and if you assign a variable that is not identical to the name of the property in response.data, it will return undefined
        let userProfile = {                                      //Assining the propery from above into a const object
            "userFullName":name,
            "profilepic":avatar_url,
            "repos":repos_url,
            "emailid":email
        };
        return userProfile;
    }
    catch(error){
        console.error("Github call failed beacuse: " + error)
    };
  } 
  module.exports = githubcall;