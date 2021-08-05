const { createPromptModule } = require("inquirer");
const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor(name, email, id, github) {
    super(name, email, id, github);
    this.role = "Engineer";
    this.github = github;
  }
  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
