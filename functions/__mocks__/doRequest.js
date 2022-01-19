// The purpose of this mock function is to replace the need to make a request to the web, when performing unit tests involving the use of the doRequest function.
const data = require('../../data.json')

const doRequest = jest.fn((url)=>new Promise((resolve,reject)=>{
    if(url=='https://mach-eight.uc.r.appspot.com/'){
        resolve(data['values'])
    }

    reject(new Error('404 Not Found'))
}))

module.exports = doRequest;