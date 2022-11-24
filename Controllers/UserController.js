var UserService = require('../Services/UserService');
// var ProductService = require('../Services/ProductService');

async function userController(req, res) {
	try {
		const addUsers = await UserService.createUsers(req)
		return res.send({
			'data' : 'data tersimpan luuurr',
			'message' : 'Alhamdulillah',
			'datalagi' : addUsers
		})
	} catch (error) {
		console.log(error);
		res.send ({
			'data':'not Found',
			'message':'server error'
		})
	}
}

async function getUsersController(req,res) {
	try {
		const response = await UserService.getUsers();

		return res.send({
			'message' : 'Success',
			'data' : response,
			'status' : 'bahagia'
		})

	} catch(error) {
		console.log(error);
		res.send ({
			'data':'not Found',
			'message':'server error'
		})
	}
}

async function getUserController(req, res){
	try {
		const responseId = await UserService.getUserById(req);
		return res.send({
			'message' : 'Success',
			'data' : responseId,
			'status' : 'bahagia'
		})
	} catch (error) {
		console.log();
		res.send({
			'data':'not Found',
			'message':'server error'
		})
	}
}


module.exports.userController = userController;
module.exports.getUsersController = getUsersController;
// module.exports.getUserController = getUserController;