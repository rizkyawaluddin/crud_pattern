/*** 
 * UserModelRepository 
 **/

const UserRepository = require('./BaseRepository');
const UserModel = require('../Models/User');
var ProductModel = require('../Models/Product');



function getAllUser(user_id)  {
    UserRepository.setModel(UserModel);
    // var UserRepository = require('../Repositories/UserRepository');
    UserModel.hasMany(ProductModel, {foreignKey: 'user_id',sourceKey: 'id'});
    ProductModel.belongsTo(UserModel, {foreignKey: 'user_id',targetKey: 'id'})
    return UserRepository.fetchIncluded("",[{model: ProductModel}])
//         {
//             model: ProductModel,
//             include: "user_id"
//         }]);
}



module.exports.getAllUser = getAllUser
module.exports.UserRepository = UserRepository