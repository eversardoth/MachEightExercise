const generatePairs = require('../generatePairs')
const data = require('../../data.json')



it('generates a list of pairs of players whose sum of heights (in) is equal to certain input', () => {

    expect.assertions(1)
    expect(generatePairs(data['values'],160)).toHaveLength(13466)

});

it('generates an empty list of pairs of players when the sum of heights (in) of every pair of players is not equal to a certain input', () => {

    expect.assertions(1)
    expect(generatePairs(data['values'],6)).toHaveLength(0)

});