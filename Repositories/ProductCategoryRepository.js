const ProductsCategoryRepository = require('./BaseRepository');
const ProductCategoryModel = require('../Models/ProductCategory');
const ProductModel = require('../Models/Product');


function getProductsCategory () {
    ProductsCategoryRepository.setModel(ProductCategoryModel);
    ProductCategoryModel.hasMany(ProductModel, {foreignKey: 'id',sourceKey: 'user_id'});
    ProductModel.hasMany(ProductCategoryModel, {foreignKey: 'id',sourceKey: 'user_id'});
    // ProductModel.belongsTo(UserModel, {foreignKey: 'user_id',targetKey: 'id'})
    // UserModel.belongsTo(ProductModel, {foreignKey: 'id',sourceKey: 'user_id'});
    return ProductRepository.fetchIncluded("",[{model: UserModel}])
}

module.exports = BaseRepository;