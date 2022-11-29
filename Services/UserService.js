var UserRepository = require('../Repositories/UserRepository');
var ProductModel = require('../Models/Product')

async function createUsers(req, res) {
    try {
        const addUsers = await UserRepository.created(req)
        console.log(req.body);
        return addUsers
    } catch (error) {
        console.log(error);
        return error
    }
}

async function getUsers() {
    try {
        const dataUsers = await UserRepository.getAllUser({
            include: [{model: ProductModel}]
        });

        return dataUsers;

    } catch(error) {
        console.log(error)
        return error
    }
}

async function getUserById(req, res) {
    try {
        const dataUser = await UserRepository.fetchOne(req);

        return dataUser

    } catch (error) {
        console.log();
        return error
    }
}
module.exports.createUsers = createUsers;
module.exports.getUsers = getUsers;
module.exports.getUserById = getUserById;