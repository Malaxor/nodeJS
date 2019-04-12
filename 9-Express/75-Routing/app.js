const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
   res.send('<html><head></head><body><h1>Hello, world</h1></body></html>')
});
app.get('/api', (req, res) => {
   res.json({ firstName: 'John', lastName: 'Doe' });
});
app.get('/person/:id', (req, res) => {
   res.send(`<html><head></head><body><h1>Hello, ${req.params.id}</h1></body></html>`);
});
app.listen(port);