const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({ extended: false });

module.exports = app => {
	
	app.get('/', (req, res) => {
		res.render('index');
	});
	app.get('/person/:id', (req, res) => {
		res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
	});
	app.post('/person', urlEncodedParser, (req, res) => {
		res.send('Thank you!');
		console.log(req.body.firstname);
		console.log(req.body.lastname);
	});
}