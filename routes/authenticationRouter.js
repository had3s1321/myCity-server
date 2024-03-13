const express = require('express');
const authenticationRouter = express.Router();

authenticationRouter
	.route('/')
	.all((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		next();
	})
	.post((req, res) => {
		res.end(`Login credentials: 
            \nusername: ${req.body.username}
            \npassword: ${req.body.password}    
        `);
	});

authenticationRouter
	.route('/signup')
	.all((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		next();
	})
	.post((req, res) => {
		res.end(`Detail of your new account:
        \nemail: ${req.body.email}
        \nusername: ${req.body.username}
        \npassword: ${req.body.password}    
        `);
	});

module.exports = authenticationRouter;
