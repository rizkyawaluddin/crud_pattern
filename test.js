function findEndpoint (partnerId, providerName, tag) {
    partnerRepository.setModel(partnerModel);
    console.log(">>>> partnerRepository.getModel"+partnerRepository.getModel()) 
    partnerModel.hasOne(partnerEndpointModel,{foreignKey: 'partner_id', sourceKey: 'id'});
    partnerEndpointModel.belongsTo(partnerModel,{foreignKey: 'partner_id', targetKey: 'id'});

    providerModel.hasOne(partnerEndpointModel,{foreignKey: 'provider_id', sourceKey: 'id'});
    partnerEndpointModel.belongsTo(providerModel,{foreignKey: 'provider_id', targetKey: 'id'});

    return partnerRepository.fetchIncluded({id: partnerId},[
        {
            model: partnerEndpointModel,
            where: {
                // provider_id: providerId,
                tag: tag
            },
            include: [
                {
                    model: providerModel,
                    where: {
                        name: providerName
                    }
                }
            ]
        }
    ]);
}