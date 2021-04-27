// Setup basic express server
const express = require('express');
const app = express();
const path = require('path');
var fs = require('fs');
var options = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
};
const server = require('https').createServer(options, app);
const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log('Server listening at port %d', port);
});
process.env.HTTPS = true;
// Routing
app.use(express.static(path.join(__dirname, 'public')));