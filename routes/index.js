var express = require('express');
var router = express.Router();
var sess;

const csv = require('csv-parser')
const fs = require('fs')
const results = [];

router.get('/', (req, res, next) => {
	sess = req.session;
	//if(sess.userID !== 1) {
    //    return res.redirect('/login');
    //} else {
  		res.render('index', { title: 'Dashboard', name: 'Kingsley' });
    //}
})

router.get('/login', (req, res, next) => {
  res.render('login', { title: 'Log in' });
})

router.post('/auth', (req, res, next) => {
	if (req.body.username == 'admin' && req.body.password == 'root') {
		sess = req.session;
		sess.userID = 1;
		res.redirect('/');
	} else {
		res.redirect(url.format({
			pathname:"/index",
			query: {
				'message': ''
			}
		}));
	}
})

router.post('/upload', (req, res, next) => {

	res.send(req.body.csv);
	
	//res.send(req.body.limit);
	//const content = fs.readFileSync(req.body.csv, 'utf8');
	//res.send(content);
	/*fs.createReadStream('')
		.pipe(csv())
		.on('data', (data) => results.push(data))
		.on('end', () => {
		console.log(results);
		// [
		//   { NAME: 'Daffy Duck', AGE: '24' },
		//   { NAME: 'Bugs Bunny', AGE: '22' }
		// ]
	});
	*/
})

router.get('/automate', (req, res, next) => {
	const {Builder, By, Key, until} = require('selenium-webdriver');
	(async function example() {
		let driver = await new Builder().forBrowser('chrome').build();
	    await driver.get('http://www.google.com/ncr');
	    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
	    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
	})();
})

module.exports = router;
