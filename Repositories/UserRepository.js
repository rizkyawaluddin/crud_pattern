const UserRepository = require('./BaseRepository');
const UserModel = require('../Models/User');
var ProductModel = require('../Models/Product');
var ProfileModel = require('../Models/Profile');


async function created(req,res) {
    try {
        const reqBody = await UserModel.create(req.body);
        return reqBody
    } catch (error) {
        return error
    }
}


// function getAllUser()  {
//     UserRepository.setModel(UserModel);
//     UserModel.hasMany(ProductModel, {foreignKey: 'user_id',sourceKey: 'id'});
//     ProductModel.belongsTo(UserModel, {foreignKey: 'user_id',targetKey: 'id'});
//     return UserRepository.fetchIncluded("",[{model: ProductModel}])
// }

function getAllUser()  {
    UserRepository.setModel(UserModel);
    UserModel.hasMany(ProductModel, {foreignKey: 'user_id',sourceKey: 'id'});
    ProductModel.belongsTo(UserModel, {foreignKey: 'user_id',targetKey: 'id'});

    UserModel.hasOne(ProfileModel, {foreignKey: 'user_id',sourceKey: 'id'});
    ProfileModel.belongsTo(UserModel, {foreignKey: 'user_id', targetKey:'id'});
    
    return UserRepository.fetchIncluded("",[
        {
            model: ProfileModel,
            
        },
        {
            model: ProductModel
            // include category
            // include product category
        },
    ])
}


module.exports.created = created;
module.exports.getAllUser = getAllUser;
module.exports.UserRepository = UserRepository;


// menggeneral crete user