const fs = require("fs");
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
            message: "What is your email address?",
            name: "email"
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
            type: "list",
            message: "What kind of license should your project have?",
            choices: ["MIT", "GPLv2", "Apache,", "GPLv3", "None"],
            name: "license"
        },

        {
            type: "input",
            message: "What should the user know about contributing to the repo?",
            name: "contribute"
        }
    ])

    .then(
        ({ username, projectname, description, install, tests, usage, license, email, contribute }) => {

            fs.writeFile("README.md", `# ${projectname}\n\n## Description\n${description}\n\n## Table of Contents\n* [Installation](#installation)\n* [Usage](#usage)\n* [Tests](#tests)\n* [Contributing](#contributing)\n* [Licensing](#licensing)\n* [Questions](#questions)\n\n## Installation\nTo install necessary dependencies, run the following command:\n\`\`\`\n${install}\n\`\`\`\n\n## Usage\n${usage}\n\n## Tests\nTo run tests, run the following command:\n\`\`\`\n${tests}\n\`\`\`\n\n## Contributing\n${contribute}\n\n## Licensing\n${license}\n\n## Questions?\nIf you have any questions, feel free to contact me directly at ${email}. You can find more of my work at [${username}](https://github.com/${username}).\n\n`, function (err) {
                if (err) {
                    throw err;
                }
            })
        })