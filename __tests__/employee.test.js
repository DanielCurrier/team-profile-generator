
const Employee = require('../constructors/employee')

// tests whether we create an employee object
test('creates an employee object', () => {
    const employee = new Employee('Bob', 739, 'BigBob23@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});
// test to determine whether getName will return a name value(string)
test('gets an employees name', () => {
    const employee = new Employee('Bob', 739, 'BigBob23@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});
// test to determine whether getName will return an id(number)
test('gets an employees id', () => {
    const employee = new Employee('Bob', 739, 'BigBob23@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});
// test to determine whether getName will return an email value(string)
test('gets an employees email', () => {
    const employee = new Employee('Bob', 739, 'BigBob23@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});
// test to determine whether getRole will return a role value(string)
test('gets an employees role', () => {
    const employee = new Employee('Bob', 739, 'BigBob23@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
});