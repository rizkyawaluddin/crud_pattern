var CategoryRepository = require('../Repositories/CategoryRepository');

async function createCategory(req, res){
    try {
        const addCategory = await CategoryRepository.insert(req)
        return addCategory
    } catch (error) {
        // console.log(error);
        return error
        
    }
}

module.exports.createCategory = createCategory;