var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var config = require('./config');
var cartCtrl = require('./cartCtrl')

var app = express();
var PORT = 3500

app.use(express.static('public'));
app.use('/node_modules', express.static('node_modules'));
app.use(session({
   secret: config.secret,
   resave: true,
   saveUninitialized: true
}));
app.use(bodyParser.json());


app.get('/api/cart', cartCtrl.getCart);

app.post('/api/cart', cartCtrl.addToCart);

app.listen(PORT, function () {
   console.log ('Express is running on port' + PORT);
})
