var request = require('request');

const gold=(metal,currency,callback)=>{

  var options = {
    'method': 'GET',
    'url': 'https://www.goldapi.io/api/'+metal+'/'+currency,
    'headers': {
      'x-access-token': 'goldapi-1zi8ukgar49z8-io',
      'Content-Type': 'application/json'
    }
  };
  request(options,(error, response)=>{
    if (error)
    callback(error);
    else {
    callback(response.body);
    }
  });
}
module.exports=gold;
