jest.mock('../doRequest')
const consoleSpy = jest.spyOn(global.console,'log').mockImplementation()
const listPairs = require('../listPairs')

beforeEach(() => {
    consoleSpy.mockClear()
  })


it('lists a list of pairs of of players whose sum of heights is equal to certain input', async () => {
    expect.assertions(1)
    await listPairs(160,'https://mach-eight.uc.r.appspot.com/')
    expect(console.log).toBeCalledTimes(13466)

});

it('informs to the user when no matches where found', async () => {
    expect.assertions(2)
    await listPairs(6,'https://mach-eight.uc.r.appspot.com/')
    expect(console.log).toBeCalledTimes(1)
    expect(console.log).toHaveBeenLastCalledWith('No matches found')

});

it('informs to the user when an invalid input has been entered', async () => {
    expect.assertions(2)
    await listPairs('e','https://mach-eight.uc.r.appspot.com/')
    expect(console.log).toBeCalledTimes(1)
    expect(console.log).toHaveBeenLastCalledWith('Invalid input, please execute the program with an Integer number as parameter')

});

it('informs to the user when an error has ocurred', async () => {
    expect.assertions(2)
    await listPairs(160,'https://mach-eig.com/')
    expect(console.log).toBeCalledTimes(1)
    expect(console.log).toHaveBeenLastCalledWith(new Error('404 Not Found'))

});