// The objective of this function is to list the pairs of players given in a website, whose heights in inches add up to an input value.

const doRequest = require("./doRequest");
const generatePairs = require("./generatePairs");

async function listPairs(input, url){

    if (Number.isInteger(+input)){
        try {
            const result = await doRequest(url)
            const pairs = generatePairs(result, input)
            
            if(pairs.length==0){
              console.log('No matches found')
            }
            else{
              pairs.forEach(element => {
                console.log(element)
              });
            }
          } 
        catch (error) {
            console.log(error)
        }
    } 
    else {
        console.log('Invalid input, please execute the program with an Integer number as parameter')
    }
}

module.exports= listPairs;