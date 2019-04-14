const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const urlEncodedParser = bodyParser.urlencoded({ extended: false });
const jsonBodyParser = bodyParser.json();
// express.static makes static (not dynamic) files available on request
// this is middlewear (between req and res)
app.use('/assets', express.static(__dirname + '/public'));
// template setup
app.set('view engine', 'ejs');
// if you omit the route ('/'), the middlewear will be applied to all routes
app.use('/', (req, res, next) => {
   console.log(`Request URL: ${req.url}`);
   //call the next middlewear that is some way connected to this particular route
   next();
});
app.get('/', (req, res) => {
   res.render('index');
});
app.get('/api', (req, res) => {
   res.json({ firstName: 'John', lastName: 'Doe' });
});
app.get('/person/:id', (req, res) => {
   res.render('person', { id: req.params.id, Qstr: req.query.qstr });
});
app.post('/person', urlEncodedParser, (req, res) => {
   res.send('Thank you!');
   console.log(req.body.firstName);
   console.log(req.body.lastName);
});
app.post('/personJSON', jsonBodyParser, (req, res) => {
   res.send('thank you for the JSON data');
   console.log(req.body.firstName);
   console.log(req.body.lastName);
});
app.listen(port);