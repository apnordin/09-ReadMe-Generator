const fs = require("fs");
const static = require("static");
const inquirer = require("inquirer");

// array of questions for user
inquirer
    .prompt({
        message: "What is your GitHub username?",
        name: "username"
    })
    .then(({ username }) => {
        fs.writeFile("README.md", "You can find more of my work at " + username + ".", function (err) {
            if (err) {
                throw err;
            }
        })
    }
    )

const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
