// The objective of this function is to generate a list of strings, where each string represents a pair of players in a list, whose height sum in inches is equal to an input value.

const binarySearch = require("./binarySearch")

function generatePairs(list, input){

    list.sort((a,b)=>a.h_in-b.h_in)
    let pairs = []
  
    for (let i = 0; i < list.length; i++){
  
      let e = list[i]
      const target = input - e.h_in
  
      const [L, R] = binarySearch(list, target)
  
      if(!isNaN(L)) {
        for (let index = L; index <= R; index++) {
          if (i!=index) {
            pairs=[...pairs,'-' + e.first_name +' '+ e.last_name + '       '  + list[index].first_name+ ' ' + list[index].last_name]
          }
        } 
      }
    }
  
    return pairs
  
}


module.exports = generatePairs;