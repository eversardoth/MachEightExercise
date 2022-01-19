// The purpose of this file is to execute the listPairs function using as parameters the provided URL (used to fetch player information), 
// and the third argument in the expression executed on the command line (used as the integer target for the sum between the heights in inches of two players)

const listPairs  = require('./functions/listPairs')
const url = 'https://mach-eight.uc.r.appspot.com/'
const input = process.argv[2]

listPairs(input,url)

