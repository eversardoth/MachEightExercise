// The objective of this function is to return the interval of indices that correspond to a target within a previously sorted list.

function binarySearch(list, target){
    let Lt = 0
    let Rt = list.length
  
    let L = NaN
    let R = NaN
  
    while (Lt < Rt) {
      let m = Math.floor((Lt+Rt)/2)
      if (list[m].h_in<target){
        Lt = m+1
      } else {
        Rt = m
      }
    }
  
    if (Lt < list.length && list[Lt].h_in == target) {
      L=Lt
    }
  
    Lt = 0
    Rt = list.length
  
    while (Lt < Rt) {
      m = Math.floor((Lt+Rt)/2)
       if (list[m].h_in>target) {
        Rt=m
       }else{
         Lt= m+1
       }
    }
  
    if (Rt>0 && list[Rt-1].h_in == target ) {
      R=Rt-1
    }
  
    return [L, R]
}

module.exports=binarySearch;

  