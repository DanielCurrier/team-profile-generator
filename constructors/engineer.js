const Employee = require('./employee')
// extends employee class by adding new role and parameter
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;
    }

    getGithub() {
        return this.github;
    }
    // overrides employee role
    getRole() {
        return 'Engineer';
    }
};

module.exports = Engineer;