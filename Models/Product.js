/*** Table Name ***/
var tableName = 'product';

/*** Same for all Models */
const Base = require('./Base');
class Product extends Base.Model {}
const sequelize = Base.sequelize;
const DataTypes = Base.Sequelize;

/*** Model Structure Define  Here */
function initialize(sequelize,DataTypes){
    return Product.init({
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		productname: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'productname'
		},
		desc: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'desc'
		},
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'user_id'
		}

    }, {
        sequelize,
    freezeTableName: true,
    modelName: tableName,
    timestamps: false
    });
}

var ProductModel = initialize(sequelize,DataTypes);
/*** exported for usage */
module.exports = ProductModel;