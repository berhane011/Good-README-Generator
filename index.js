const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
<<<<<<< HEAD
const generateMarkdown = require("./utils/generateMarkdown")
=======
const generateMarkdown =require("./utils/generateMarkdown")
>>>>>>> 5d6802aefdf5909d1f3803d6cde869a2fa8ffdb0

// writeToFile("README2.md", generateMarkdown({title: "Code Quiz", description: "This is a quiz."}));
// array of questions for user
const questions = [
  {
    type: "input",
    message: "Enter your GitHub username:",
    name: "username",
  },
  {
    type: "input",
    message: "Enter title name:",
    name: "title",
  },
  {
    type: "input",
    message: "Enter Description:",
    name: "description",
  },
  {
    type: "input",
    message: "Enter Installation:",
    name: "installation",
  },
  {
    type: "input",
    message: "Enter Usage:",
    name: "usage",
  },
  {
    type: "input",
    message: "Enter contribute:",
    name: "contribute",
  },
  {
    type: "list",
    message: "Enter License",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }

    console.log("Success!");
  });
}

// function to initialize program
function init() {
<<<<<<< HEAD
  inquirer
    .prompt(questions)
    .then(function (data) {


      writeToFile("README.md", generateMarkdown(data));

      console.log('data', data)
    });
=======
  inquirer.prompt(questions).then(function (data) {
    console.log("data", data);

    writeToFile("README.md", generateMarkdown(data));
  });
>>>>>>> 5d6802aefdf5909d1f3803d6cde869a2fa8ffdb0
}

// function call to initialize program
init();
