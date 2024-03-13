const express = require('express');
const morgan = require('morgan');
const newsRouter = require('./routes/newsRouter');
const weatherRouter = require('./routes/weatherRouter');
const authenticationRouter = require('./routes/authenticationRouter');
const accountRouter = require('./routes/accountRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/news', newsRouter);
app.use('/weather', weatherRouter);
app.use('/authentication', authenticationRouter);
app.use('/account', accountRouter);

app.use((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}`);
});
