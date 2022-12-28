const Employee = require('./employee')
// extends employee class by adding new role and parameter
class Intern extends Employee {
    constructor(name, id, email, school) {

        super(name, id, email);

        this.school = school;
    }

    getSchool() {
        return this.school;
    }
    // overrides employee role
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;