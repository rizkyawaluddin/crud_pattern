var ProductRepository = require('../Repositories/ProductRepository')
// const ProductModel = require('../Models/Product');
// const BaseRepository = require('../Repositories/BaseRepository');

async function createProduct(req, res) {
    // ProductRepository.setModel(ProductModel)
    try {
        const addProduct = await ProductRepository.insert(req.body)
        console.log(req.body);
        return addProduct
    } catch (error) {
        // console.log();
        return error
    }
}

async function getAllProducts() {
    try {
        const dataProducts = await ProductRepository.getProducts()
        return dataProducts
    } catch (error) {
        // console.log();
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