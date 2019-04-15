const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const apiContoller = require('./controllers/apiController');
const htmlController = require('./controllers/htmlController');

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

apiContoller(app);
htmlController(app);

app.use('/', (req, res, next) => {
   console.log(`Request URL: ${req.url}`);
   next();
});
app.listen(port);