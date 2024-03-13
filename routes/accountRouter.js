const express = require('express');
const accountRouter = express.Router();

accountRouter
	.route('/')
	.all((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		next();
	})
	.put((req, res) => {
		res.end(
			`${req.body.username} has requested '${req.body.password}' as their new password`
		);
	})
	.delete((req, res) => {
		res.end(
			`The account associated to the email:${req.body.email} has been deleted`
		);
	});

module.exports = accountRouter;
