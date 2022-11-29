const ProductRepository = require('./BaseRepository');
const ProductModel = require('../Models/Product');
var UserModel = require('../Models/User');
// const { get } = require('../routes');

module.exports.insert = (req) => {
    return ProductModel.create(req).then(Result => {
        return Result;
    }).catch(err => {
        console.error("Unable to insert data", err);
        return "error";
    })
}
// async function created(req,res) {
//     try {
//         const reqBody = await UserModel.create(req.body);
//         console.log(req.body);
//         return reqBody
//     } catch (error) {
//         return error
//     }
// }


function getProducts () {
    ProductRepository.setModel(ProductModel);
    ProductModel.hasMany(UserModel, {foreignKey: 'id',sourceKey: 'user_id'});

    // ProductModel.belongsTo(UserModel, {foreignKey: 'user_id',targetKey: 'id'})
    // UserModel.belongsTo(ProductModel, {foreignKey: 'id',sourceKey: 'user_id'});
    return ProductRepository.fetchIncluded("",[{model: UserModel}])
}



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


module.exports.updateUse = updateUse;
module.exports.getProducts = getProducts;
module.exports.ProductRepository = ProductRepository




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