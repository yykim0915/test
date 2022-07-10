// things.js
var axios = require('axios')
var data = JSON.stringify({
  "collection":"things",
  "database":"testdb",
  "dataSource" : "Cluster0”,
  "projection": {
    "_id" : 0,
    "id" : 1,
    "name" : 1
  }
})

var config = {
  method : 'post',
  url : 'https://data.mongodb-api.com/app/data-lfifm/endpoint/data/beta/action/findOne',
  header: {
    'Content-Type':'application/json',
    'Access-Control-Request-Headers':'*',
    'api-key':'6ezCE7MVrryTHeJI5Ph1CcxUqBAiGjPXBpQxsMXzDG2BoV07HqoIZPHgvpM4HYGu'
  },
  data : data
}

axios (config)
  .then(function(response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function(error) {
    console.log(error);
  })
