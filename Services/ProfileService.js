var ProfileRepository = require('../Repositories/ProfileRepository');
var UserModel = require('../Models/User')

async function createProfileUser(req, res) {
    try {
        const addProfile = await ProfileRepository.createProfile(req.body)
        console.log(addProfile);
        return addProfile
    } catch (error) {
        console.log(error);
        return error
    }
}

async function getAllProfiles() {
    console.log('asas');
    try {
        const dataProfile = await ProfileRepository.getProfiles({
            include: [{model: UserModel}]
        });
        return dataProfile
    } catch (error) {
        console.log(error);
        return error
        
    }
}

module.exports.createProfileUser = createProfileUser;
module.exports.getAllProfiles = getAllProfiles;

