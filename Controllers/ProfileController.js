var ProfileService = require('../Services/ProfileService')
const response = require('../response');

async function userController(req, res) {
	try {
		const addProfile = await ProfileService.createProfileUser(req)
		if (addProfile == null){
            return response(res, 400, false ,'Data not found');
        }else{
            return response(res, 200, true ,'Success Send Request To Profile', addProfile);
        }
	} catch (error) {
		// console.log(error);
		return response(res, 400, false ,'Failed Send Request To Profile');
	}
}

async function getProfilesController(req,res)  {
    try{
        const responseProfile = await ProfileService.getAllProfiles();
        if (response == null){
            return response(res, 400, false ,'Data not found');
        }else{
            return response(res, 200, true ,'Success Send Request To Profile', responseProfile);
        }


    }catch(error){

        return response(res, 400, false ,'Failed Send Request To Profile')
    }
}

module.exports.userController = userController;
module.exports.getProfilesController = getProfilesController;