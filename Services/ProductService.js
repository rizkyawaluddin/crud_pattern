var ProductRepository = require('../Repositories/ProductRepository');
var UserModel = require('../Models/User')

async function createProduct(req, res) {
    // ProductRepository.setModel(ProductModel)
    try {
        let reqBody = req.body
        let payload ={
            productname:reqBody.productname,
            desc:reqBody.desc,
            user_id:reqBody.user_id
        }
        const addProduct = await ProductRepository.insert(payload)
        // console.log(req.body);  
        return addProduct
    } catch (error) {
        // console.log();
        return error
    }
}

async function getAllProducts() {
    console.log('asas');
    try {
        const dataProducts = await ProductRepository.getProducts({
            include: [{model: UserModel}]
        });
        return dataProducts
    } catch (error) {
        return error
        
    }
}

async function updateProduct(req) {
    try {
        const updateData = await ProductRepository.updateProduct(req)

        return updateData
    } catch (error) {
        console.log(error);
        return error
    }
}
// async function getAllProduct (id) {    
//     var ProductRepository = require('../Repositories/ProductRepository');
//     ProductModel.hasMany(UserModel, {foreignKey: 'id',sourceKey:'userid'});//correct and working
//     return ProductRepository.fetchIncluded(id,[UserModel]);;
// }


//create product


module.exports.createProduct = createProduct;
module.exports.getAllProducts = getAllProducts;
module.exports.updateProduct = updateProduct;