
const binarySearch = require('../binarySearch')
const data = require('../../data.json')
const list = data['values'].sort((a,b)=>a.h_in-b.h_in)

it('finds the interval of indexes of multiple results for a target in a previously ordered list', () => {
    expect.assertions(1)
    expect(binarySearch(list,80)).toHaveLength(2)
});


it('returns a list of two NaN elements when a target is not found in a previously ordered lit', () => {
    expect.assertions(2)
    expect(binarySearch(list,1)).toHaveLength(2)
    expect(binarySearch(list,1)).toEqual([NaN, NaN])
});


