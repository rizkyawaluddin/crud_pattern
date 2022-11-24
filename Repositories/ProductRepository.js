/*** 
 * ProductRepository 
 **/

const BaseRepository = require('./BaseRepository');
const ProductModel = require('../Models/Product');


BaseRepository.setModel(ProductModel);
module.exports.getProducts = (user_id) => {
    var ProductRepository = require('../Repositories/ProductRepository');
    ProductModel.belongsTo(UserModel, {foreignKey: 'user_id',targetKey: 'id'})
    UserModel.hasMany(ProductModel, {foreignKey: 'user_id',sourceKey: 'id'});
    return ProductRepository.fetchIncluded({id: user_id},[{model: UserModel}])}



const updateUse = async (req,res) => {
    try {
        const id = req.params.id;
        const data = req.body;

        const dataUse = await ProductModel.update(data,{
            where: {
                id: id
            }
        })
        return dataUse;

    } catch(error) {
        console.log(error)
        return error
    }
}


module.exports = BaseRepository;
// module.exports.getProducts = getProducts;
module.exports.updateUse = updateUse;

// const getProducts = async() => {
//     try {
//         const dataProducts = await ProductModel.findAll();

//         return dataProducts

//     } catch(error) {
//         console.log(error)
//         return error
//     }
// }

// module.exports.updateProduct = async (req, res) => {
//     try {
//         const id = req.params.id;
//         const data = req.body;

//         const dataProducts = await ProductModel.update(data,{
//             where: {
//                 id: id
//             }
//         })

//         return dataProducts
//     } catch (error) {
//         return error
        
//     }
// }