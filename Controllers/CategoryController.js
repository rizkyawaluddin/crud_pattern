var CategoryService = require('../Services/CategoryService');
const response = require('../response');

async function categoryController(req, res) {
	try {
		const addCategory = await CategoryService.createCategory(req)
        // console.log("addCategory")
        console.log(addCategory)
		if (addCategory == null){
            return response(res, 400, false ,'Data not found');
        }else{
            return response(res, 200, true ,'Success Send Request To Category', addCategory);
        }
	} catch (error) {
		console.log(error);
		return response(res, 400, false ,'Failed Send Request To Profile')
	}
}

module.exports.categoryController = categoryController;