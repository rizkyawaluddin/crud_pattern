var CategoryRepository = require('../Repositories/CategoryRepository');

async function createCategory(req, res){
    try {
        let reqBody = req.body
        console.log(req.body);
        let payload ={
            category_name:reqBody.category_name,
        }
        const addCategory = await CategoryRepository.insert(payload)  
        return addCategory
    } catch (error) {
        // console.log(error);
        return error
        
    }
}

module.exports.createCategory = createCategory;