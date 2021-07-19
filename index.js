const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const generatePage = require("./dist/index.html");

const team = [];

// Initialize app
init = () => {
  console.log("Welcome! Please answer the following questions.");
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the Manager's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter Manager's ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter Manager's email address:",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter Manager's office number:",
      },
    ])
    .then((managerAnswers) => {
      managerAnswers.role = "Manager";
      const { name, id, email, officeNumber, role } = managerAnswers;
      const newManager = new Manager(name, id, email, officeNumber, role);
      team.push(newManager);
      employeeRole();
    });
};

// Employee questions
employeeRole = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        message: "Select an employee role",
        name: "role",
        choices: ["Engineer", "Intern"],
      },
    ])
    .then((answer) => {
      if (answer.role === "Engineer") {
        addEngineer();
      } else {
        addIntern();
      }
    });
};

// Engineer section
addEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter Engineer's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter a employee ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter a email address:",
      },
      {
        type: "input",
        name: "github",
        message: "Enter a github username:",
      },
    ])
    .then((engineerAnswers) => {
      engineerAnswers.role = "Engineer";
      const { name, id, email, github, role } = engineerAnswers;
      const newEngineer = new Engineer(name, id, email, github, role);
      team.push(newEngineer);
      addEmployee();
    });
};

// Intern section
addIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter a name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter a employee ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter a email address:",
      },
      {
        type: "input",
        name: "school",
        message: "Enter a school:",
      },
    ])
    .then((internAnswers) => {
      internAnswers.role = "Intern";
      const { name, id, email, school, role } = internAnswers;
      const newIntern = new Intern(name, id, email, school, role);
      team.push(newIntern);
      addEmployee();
    });
};

//Function to add employees
addEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "add",
        message: "Would you like to add another employee?",
        choices: ["Yes", "No"],
      },
    ])
    .then((answer) => {
      if (answer.add === "Yes") {
        employeeRole();
      } else {
        generateHTML();
      }
    });
};

// Generate HTML function
// generateHTML = () => {
//   const genHTML = generate(team);
//   fs.writeFile(outputPath, genHTML, (err) => {
//     if (err) {
//       return console.log(err);
//     } else {
//       return console.log("Team Created!");
//     }
//   });
// };

// fs.writeFile("./dist/index.html", pageHTML, (err) => {
//   if (err) throw err;

//   console.log("Portfolio complete! Check out index.html to see the output!");
// });

init();
