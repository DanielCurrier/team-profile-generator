const Employee = require('./employee')
// extends employee class by adding new role and parameter
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
    // overrides employee role
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;