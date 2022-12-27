const { default: expect } = require('expect');
const { number } = require('yargs');
const Manager = require('../constructors/manager')


// test to see if a manager object is created
test('returns a manager object', () => {
    const manager = new Manager('Bob', 739, 'BigBob23@gmail.com', 9);

    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});
// determines whether the getOfficeNumber function will return a number value
test('gets an office number', () => {
    const manager = new Manager('Bob', 739, 'BigBob23@gmail.com', 9);

    expect(manager.getOfficeNumber()).toEqual(expect.any(number));
})
// test to determine whether getRole will return a role value(string)
test('gets an employees role', () => {
    const manager = new Manager('Bob', 739, 'BigBob23@gmail.com', 9);

    expect(manager.getRole()).toEqual('Manager');
});