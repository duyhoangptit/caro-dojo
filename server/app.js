let express = require('express');
let bodyParser = require('body-parser');

let PORT = 8888;

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let routes = require('./routes/routes.js')(app);
let server = app.listen(PORT, onServing);

function onServing() {
    console.log('listening on %s port %s', server.address(), server.address().port);
}