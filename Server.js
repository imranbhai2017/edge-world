var publicDir = 'public';
const express = require('express');
/* import * as express from 'express' */
const app = express();
app.use(express.static(__dirname + "/" + publicDir));

var user = require('./sample-api.js')(app);
app.route('./sample-api.js').get((req, res) => {

});
app.listen(8997, () => {
  console.log('Server started!');
});
module.exports = app;