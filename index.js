
// Node modules
const inquirer = require('inquirer');
const fs = require('fs');
const { resolve } = require('path');
// Declared classes 
const Manager = require('./constructors/manager');
const Engineer = require('./constructors/engineer');
const Intern = require('./constructors/intern');

// the team array
const team = [];
// TODO:: 1. Create a class constructor for team members ✔ 2.set up the prompts for inquirer ✔ 3. set up loop to keep adding team members ✔. 4. set up function that will take these groups and produce them onto a html file with css styling. 5. test these with jest to prove it works it works 6. screencast the app, showing how it works.


// UPDATE: After pushing this inquirer package up to the repo, I need to add Jest tests to prove that it works. Then I will add the writeFile function!
async function createEmployee() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            message: "What is your employee's name?",
            name: 'name',
            // Using a validate function to ensure no prompt is empty!
            validate: (value) => { if (value) { return true } else { return 'please type in a response to continue' } },
        },

        {
            type: 'input',
            message: "What is your employee's id?",
            name: 'id',
            validate: (value) => { if (value) { return true } else { return 'please type in a response to continue' } },
        },

        {
            type: 'input',
            message: "What is your employee's email address?",
            name: 'email',
            validate: (value) => { if (value) { return true } else { return 'please type in a response to continue' } },
        },

        {
            type: 'list',
            message: "What is your employee's role?",
            name: 'role',
            choices: ['Engineer', 'Intern', 'Manager'],
            validate: (value) => { if (value) { return true } else { return 'please type in a response to continue' } },
        },

        {
            type: 'input',
            message: "What is your Intern's school name?",
            name: 'school',
            //   included a when parameter for role related questions.
            when: answers => answers.role === 'Intern',
            validate: (value) => { if (value) { return true } else { return 'please type in a response to continue' } }
        },

        {
            type: 'input',
            message: "What is your Manager's office number?",
            name: 'officeNumber',
            when: answers => answers.role === 'Manager',
            validate: (value) => { if (value) { return true } else { return 'please type in a response to continue' } }
        },

        {
            type: 'input',
            message: "What is your employee's GitHub username?",
            name: 'github',
            when: answers => answers.role === 'Engineer',
            validate: (value) => { if (value) { return true } else { return 'please type in a response to continue' } }
        },
        {
            type: 'confirm',
            name: 'confirmEmployee',
            message: 'Would you like to add another employee?',
            default: false
        }

    ])
        .then(employeeInputs => {
            let { name, id, email, role, officeNumber, github, school, confirmEmployee } = employeeInputs;

            let employee;

            if (role === 'Manager') {
                employee = new Manager(name, id, email, officeNumber)
                console.log(employee)
            }

            else if (role === 'Engineer') {
                employee = new Engineer(name, id, email, github)
                console.log(employee)
            }

            else {
                employee = new Intern(name, id, email, school)
                console.log(employee)
            };

            team.push(employee);

            if (confirmEmployee) {
                return createEmployee(team);
            } else {
                return team;
            }
        })

};

createEmployee();





