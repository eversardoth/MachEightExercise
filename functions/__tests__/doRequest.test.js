const doRequest = require('../doRequest')


it('requests information implementing promises', () => {
    expect.assertions(1)
    return expect(doRequest('https://mach-eight.uc.r.appspot.com/')).resolves.toHaveProperty('values');
});

it('fails to request information implementing promises', () => {
    return expect(doRequest('https://mach-eig.com')).rejects.toThrow();
});

