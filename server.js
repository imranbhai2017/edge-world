var publicDir = 'public';
const express = require('express');
/* import * as express from 'express' */
const app = express();
//app.use(express.static(__dirname + "/" + publicDir));
app.use(express.static(path.join(__dirname, "js")));
console.log("came inside....")
var user = require('./sample-api.js')(app);
app.route('./sample-api.js').get((req, res) => {

});

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
    mongoURL = process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL,
    mongoURLLabel = "";

    
app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app;