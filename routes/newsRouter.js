const express = require('express');
const newsRouter = express.Router();

newsRouter
	.route('/')
	.all((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		next();
	})
	.get((req, res) => {
		res.end('Will send all news to you');
	});

newsRouter
	.route('/:articleId')
	.all((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		next();
	})
	.get((req, res) => {
		res.end(`Will send you the article: ${req.params.articleId} `);
	});

module.exports = newsRouter;
