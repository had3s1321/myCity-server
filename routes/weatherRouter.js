const express = require('express');
const weatherRouter = express.Router();

weatherRouter
	.route('/')
	.all((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		next();
	})
	.get((req, res) => {
		res.end('Will send you the weather infos');
	});

module.exports = weatherRouter;
