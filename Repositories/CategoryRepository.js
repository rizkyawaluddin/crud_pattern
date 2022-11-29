const BaseRepository = require('./BaseRepository');
const CategoryModel = require('../Models/Category');
 
BaseRepository.setModel(CategoryModel);
//  async function insert(req) {
//     return RequestModel.create(req).then(Result => {
//         return Result;
//     }).catch(err => {
//         console.error("Unable to insert data", err);
//         return "error";
//     })()
// }
//  module.exports.insert = insert;

module.exports = BaseRepository;