// The goal of this function is to return a promise that resolves to the list of players displayed on the exercise website, using the https module.

const https = require('https')


function doRequest(url){

    return new Promise((resolve, reject) => {
        const req = https.get(url, (res) => {
          res.setEncoding('utf8');
          let responseBody = '';
    
          res.on('data', (chunk) => {
            responseBody += chunk;
          });
    
          res.on('end', () => {
            resolve(JSON.parse(responseBody)['values']);
          });
        });
    
        req.on('error', (err) => {
          reject(err);
        });

        req.end();
      });

}

module.exports = doRequest