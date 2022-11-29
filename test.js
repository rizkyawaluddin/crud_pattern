function findEndpoint (partnerId, providerName, tag) {
    partnerRepository.setModel(partnerModel);
    console.log(">>>> partnerRepository.getModel"+partnerRepository.getModel()) 
    partnerModel.hasOne(partnerEndpointModel,{foreignKey: 'partner_id', sourceKey: 'id'});
    partnerEndpointModel.belongsTo(partnerModel,{foreignKey: 'partner_id', targetKey: 'id'});

    providerModel.hasOne(partnerEndpointModel,{foreignKey: 'provider_id', sourceKey: 'id'});
    partnerEndpointModel.belongsTo(providerModel,{foreignKey: 'provider_id', targetKey: 'id'});

    return partnerRepository.fetchIncluded({id: partnerId},
        [
        {
            model: partnerEndpointModel,
            where: {
                // provider_id: providerId,
                tag: tag
            },
            
            model: providerModel,
            where: {
                name: providerName
            }
        }
    ]);
}




    if (conditions) {
        return this.getModel().findAll({
              where: conditions ,
              include: Includes,
              logging: console.log,
            }).then(Result => {
              return Result;
            }).catch(err => {
                console.error('Unable to Fetch', err);
                return "error";
            });
    }else {
        return this.getModel().findAll({
            //   where: conditions ,
              include: Includes,
              logging: console.log,
            }).then(Result => {
              return Result;
            }).catch(err => {
                console.error('Unable to Fetch', err);
                return "error";
            });
    }

function getProducts (user_id) {
    console.log(user_id);
    ProductRepository.setModel(ProductModel);
    // var ProductRepository = require('../Repositories/ProductRepository');
    ProductModel.hasMany(UserModel, {foreignKey: 'user_id',sourceKey: 'id'});
    UserModel.belongsTo(ProductModel);
    // UserModel.belongsTo(ProductModel, {foreignKey: 'id',sourceKey: 'user_id'});
    return ProductRepository.fetchIncluded({user_id: user_id},[
        {
            model: UserModel
        }
    ])
}


ProductRepository.setModel(ProductModel);
// var ProductRepository = require('../Repositories/ProductRepository');
ProductModel.hasMany(UserModel, {foreignKey: 'id',sourceKey: 'user_id'});
UserModel.belongsTo(ProductModel, {foreignKey: 'id',targetKey: 'user_id'})
// UserModel.belongsTo(ProductModel, {foreignKey: 'id',sourceKey: 'user_id'});
return ProductRepository.fetchIncluded({id: user_id},[{model: UserModel}])