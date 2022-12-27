const Intern = require('../constructors/intern')

//  Test to determine whether or not an intern object is created
test('Returns an Intern object', () => {
    const intern = new Intern('Bob', 739, 'BigBob23@gmail.com', 'Columbia University');

    expect(intern.getSchool()).toEqual(expect.any(String));
});
// Test to return the string value of the getSchool function
test('gets an interns school name', () => {
    const intern = new Intern('Bob', 739, 'BigBob23@gmail.com', 'Columbia Univerity');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});
// test to determine whether getRole will return a role value(string)
test('gets an employees role', () => {
    const intern = new Intern('Bob', 739, 'BigBob23@gmail.com', 'Columbia University');

    expect(intern.getRole()).toEqual('Intern');
});