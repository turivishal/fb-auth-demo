// Setup basic express server
const express = require('express');
const app = express();
const path = require('path');
var fs = require('fs');
var server;
// LOCAL
if (false) {
    var options = {
        key: fs.readFileSync('./key.pem'),
        cert: fs.readFileSync('./cert.pem')
    };
    server = require('https').createServer(options, app);
    process.env.HTTPS = true;
}
// LIVE
else {
    server = require('http').createServer(app);
}
const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log('Server listening at port %d', port);
});
process.env.HTTPS = true;
// Routing
app.use(express.static(path.join(__dirname, 'public')));