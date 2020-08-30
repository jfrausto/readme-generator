const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");

// array of questions for user
// 0:title, 1:desc, 2:installation, 3:usage,
// 4:license, 5:contributions, 6:tests, 7:username, 8:email
const questions = [
  "What is the title of your project?",
  "Write a short description: ",
  "How do you install this application? ",
  "Usage information: ",
  "Choose a license: ",
  "What are some contribution guidelines? ",
  "Test instructions: ",
  "Enter your GitHub username: ",
  "Enter your email: ",
];

// function to write README file
function writeToFile(fileName, data) {
  // console.log(`${fileName} will be created with the title of ${data.title}`);
  // invoke generate markdown function that returns the ES6+ string
  fs.writeFile(fileName, generateMarkdown.generate(data), function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Success! README-gen.md created!");
  });
}
// function to initialize program
// prompt the user with questions
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: questions[0],
      },
      {
        type: "input",
        name: "description",
        message: questions[1],
      },
      {
        type: "input",
        name: "installation",
        message: questions[2],
      },
      {
        type: "input",
        name: "usage",
        message: questions[3],
      },
      {
        type: "list",
        message: questions[4],
        name: "license",
        choices: ["MIT", "Apache 2.0", "AGPLv3"],
      },
      {
        type: "input",
        name: "contributions",
        message: questions[5],
      },
      {
        type: "input",
        name: "testing",
        message: questions[6],
      },
      {
        type: "input",
        name: "githubUser",
        message: questions[7],
      },
      {
        type: "input",
        name: "email",
        message: questions[8],
      },
    ])
    .then(function (data) {
      // build badge cases; create new properties badge and badgeUrl
      switch (data.license) {
        case "MIT":
          data.badge =
            "[![License: MIT](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)";
          data.badgeUrl = "https://opensource.org/licenses/MIT";
          break;
        case "Apache 2.0":
          data.badge =
            "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
          data.badgeUrl = "https://opensource.org/licenses/Apache-2.0";
          break;
        default:
          data.badge =
            "[![License: AGPLv3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
          data.badgeUrl = "https://www.gnu.org/licenses/agpl-3.0.html";
          break;
      }
      // send the responses to be written
      writeToFile("README-gen.md", data);
    });
}
// function call to initialize program
init();
