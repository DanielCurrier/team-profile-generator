const Engineer = require('../constructors/engineer')
// test to see if an engineer object is returned
test('returns an Engineer object', () => {
    const engineer = new Engineer('Bob', 739, 'BigBob23@gmail.com', 'BobtheBuilder');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});
// test to determine whether the getGithub function works.
test('gets an engineers github', () => {
    const engineer = new Engineer('Bob', 739, 'BigBob23@gmail.com', 'BobtheBuilder');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// test to determine whether getRole will return a role value(string)
test('gets an engineers role', () => {
    const engineer = new Engineer('Bob', 739, 'BigBob23@gmail.com', 'BobtheBuilder');

    expect(engineer.getRole()).toEqual('Engineer');
});