var UserService = require('../Services/UserService');
const response = require('../response');
// var ProductService = require('../Services/ProductService');

async function userController(req, res) {
	try {
		const addUsers = await UserService.createUsers(req)
		if (addUsers == null){
            return response(res, 400, false ,'Data not found');
        }else{
            return response(res, 200, true ,'Success Send Request To User', addUsers);
        }
	} catch (error) {
		console.log(error);
		return response(res, 400, false ,'Failed Send Request To User');
	}
}

async function getUsersController(req, res) {
	try {
		const request = await UserService.getUsers(req);

		if (response == null){
            return response(res, 400, false ,'Data not found');
        }else{
            return response(res, 200, true ,'Success Send Request To User', request);
        }

	} catch(error) {
		return response(res, 400, false ,'Failed Send Request To User');
	}
}

// async function getUserController(req, res){
// 	try {
// 		const responseId = await UserService.getUserById(req);
// 		return res.send({
// 			'message' : 'Success',
// 			'data' : responseId,
// 			'status' : 'bahagia'
// 		})
// 	} catch (error) {
// 		console.log();
// 		res.send({
// 			'data':'not Found',
// 			'message':'server error'
// 		})
// 	}
// }


module.exports.userController = userController;
module.exports.getUsersController = getUsersController;
// module.exports.getUserController = getUserController;