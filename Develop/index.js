const fs = require("fs");
const static = require("static");
const inquirer = require("inquirer");

// array of questions for user
inquirer
    .prompt([
        {
            type: "input",
            message: "What is the name of your project?",
            name: "projectname"
        },

        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username"
        },

        {
            type: "input",
            message: "Enter a description of your project:",
            name: "description"
        },

        {
            type: "input",
            message: "What command should be run to install dependencies?",
            name: "install"
        },

        {
            type: "input",
            message: "What command should be run to run tests?",
            name: "tests"
        },

        {
            type: "input",
            message: "What should the user know about using the repo?",
            name: "usage"
        },

        {
            type: "input",
            message: "What kind of license should your project have?",
            name: "license"
        }
    ])

    .then(
        ({ username, projectname, description, install, tests, usage, license }) => {

            fs.writeFile("README.md", `# ${projectname}\n\n## Description\n${description}\n\n## Installation\nTo install necessary dependencies, run the following command:\n\`\`\`\n${install}\n\`\`\`\n\n## Usage\n${usage}\n\n## Tests\nTo run tests, run the following command:\n\`\`\`\n${tests}\n\`\`\`\n\n## Licensing\n${license}\n\nYou can find more of my work at ${username}.\n\n`, function (err) {
                if (err) {
                    throw err;
                }
            })
        })


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
