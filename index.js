// included generator file for markups
const generateHTML = require('./templates/generator')

// Node modules
const inquirer = require('inquirer');
const fs = require('fs');
// Declared classes 
const Manager = require('./constructors/manager');
const Engineer = require('./constructors/engineer');
const Intern = require('./constructors/intern');

// the team array
const team = [];
// TODO:: 1. Create a class constructor for team members ✔ 2.set up the prompts for inquirer ✔ 3. set up loop to keep adding team members ✔. 4. set up function that will take these groups and produce them onto a html file with css styling. ✔5. test these with jest to prove it works it works ✔6. screencast the app, showing how it works. ✔7. Create a README file.


// calls the inquirer prompts to generate an employee
function createEmployee() {
    return inquirer.prompt([
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
            validate: (value) => { if (value !== NaN) { return true } else { return 'please type in a valid response to continue' } },
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
            validate: (value) => { if (value !== NaN) { return true } else { return 'please type in a valid response to continue' } }
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
        // takes in the data gathered from inquirer and adds it to the team array! 
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

            // Designed so it will return back to the inquirer block if you want to add more employees
            if (confirmEmployee) {
                return createEmployee(team);
            } else {
                return team;
            }

        })

};

// defines the writeFile function to be called later. Defines error if there is any.
const writeFile = data => {
    fs.writeFile('./assets/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Your team profile has been successfully generated! Go to the html file in the assets folder to view your results.')
        }
    })
};

// Calls the createEmployee function then takes that information and appends it to the generator template, finally creating the html file.
createEmployee()
    .then(team => { return generateHTML(team); })
    .then(pageHTML => {
        return writeFile(pageHTML)
    })
    .catch(err => {
        console.log(err);
    });





