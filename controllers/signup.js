const signup = (req, res, pdb) => {
	const { fullname,
			email,
			password,
			birthday,
			address,
			parentprofession,
			level,
			transport } = req.body;

	pdb('users')
	.insert({
		name: nname
	})
	.then(()=>res.send('success'))
	.catch(err=>console.log(err))
	}
	

}


module.exports = {
	signup: signup
}