const request = require('request');

request({
  url:'https://maps.googleapis.com/maps/api/geocode/json?address=700%20health%20science%20drive&key=AIzaSyAeaQpQxy8-6s9XcAjz90MCqsxGuBnemJs',
  json: true
}, (error, response, body) => {
  console.log(JSON.stringify(body, undefined, 2));
});
