const express= require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex= require('knex');
const bcrypt = require('bcrypt');
const signup = require('./controllers/signup');
const pdb = knex({
	client: 'pg',
	connection: {
		host: '127.0.0.1',
		user: 'molaiea',
		password: 'Molaiea1809',
		database: 'school'
	}
});

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/register", (req, res)=>{signup.signup(req, res, pdb)})

app.listen(1809, ()=>{
	console.log('app is running on port 1809');
})
