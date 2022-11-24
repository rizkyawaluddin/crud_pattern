var CategoryService = require('../Services/CategoryService');

async function categoryController(req, res) {
	try {
		const addCategory = await CategoryService.createCategory(req)
        console.log("addCategory")
        console.log(addCategory)
		return res.send({
			'data' : 'data tersimpan luuurr',
			'message' : 'Alhamdulillah',
			'datalagi' : addCategory,
		})
	} catch (error) {
		console.log(error);
		res.send ({
			'data':'not Found',
			'message':'server error'
		})
	}
}

module.exports.categoryController = categoryController;