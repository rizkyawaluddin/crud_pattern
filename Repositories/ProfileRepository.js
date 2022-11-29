const ProfileRepository = require('./BaseRepository');
const ProfileModel = require('../Models/Profile');
var UserModel = require('../Models/User');

async function createProfile(req,res) {
    try {
        const reqBody = await ProfileModel.create(req);
        return reqBody
    } catch (error) {
        return error
    }
}

function getProfiles()  {
    ProfileRepository.setModel(ProfileModel);
    ProfileModel.belongsTo(UserModel, {foreignKey: 'user_id',sourceKey: 'id'});

    return ProfileRepository.fetchIncluded("",[{model: UserModel}])
}

module.exports.createProfile = createProfile;
module.exports.ProfileRepository = ProfileRepository
module.exports.getProfiles = getProfiles;