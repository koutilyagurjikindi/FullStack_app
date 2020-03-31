var jwt = require('express-jwt')
var secret = require("../config").secret;

function getTokenFromHeader(req){
  if (req.headers.authorization  === ''){
    return null;
  }
  return req.headers.authorization;
}

var auth = {
  required: jwt({
    secret:secret,
    userProperty: 'payload',
    getToken: getTokenFromHeader
  }),
  optional: jwt({
    secret:secret,
    userProperty:'payload',
    credentialsRequired: false,
    getToken:getTokenFromHeader
  })
}

module.exports = auth