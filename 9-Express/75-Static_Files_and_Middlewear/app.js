const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
// express.static makes static (not dynamic) files available on request
// this is middlewear (between req and res)
app.use('/assets', express.static(__dirname + '/public'));
// if you omit the route ('/'), the middlewear will be applied to all routes
app.use('/', (req, res, next) => {
   console.log(`Request URL: ${req.url}`);
   //call the next middlewear that is some way connected to this particular route
   next();
});

app.get('/', (req, res) => {
   res.send('<html><head><link href=assets/style.css type=text/css rel="stylesheet"/></head><body><h1>Hello, world</h1></body></html>')
});
app.get('/api', (req, res) => {
   res.json({ firstName: 'John', lastName: 'Doe' });
});
app.get('/person/:id', (req, res) => {
   res.send(`<html><head></head><body><h1>Hello, ${req.params.id}</h1></body></html>`);
});
app.listen(port);