const signup = (req, res, pdb) => {
	const { fullname,
			email,
			password,
			birthday,
			address,
			parentprofession,
			level,
			transport,
			role,
			gender } = req.body;
	trans = transport==="oui" ? 1:0;

	pdb('users')
	.insert({
		fullname: fullname,
		email:email,
		password:password,
		birthday:123,
		address:address,
		parentprofession:parentprofession,
		studentclass:1,
		transport:trans,
		role:role,
		gender: gender
	})
	.then(()=>res.send('success'))
	.catch(err=>console.log(err))
	}
	




module.exports = {
	signup: signup
}