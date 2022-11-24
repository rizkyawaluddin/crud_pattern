/*** Table Name ***/
var tableName = 'product_category';

/*** Same for all Models */
const Base = require('./Base');
class ProductCategory extends Base.Model {}
const sequelize = Base.sequelize;
const DataTypes = Base.Sequelize;

/*** Model Structure Define  Here */
function initialize(sequelize,DataTypes){
    return ProductCategory.init({
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		category_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'category_id'
		},
		product_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'product_id'
		},

    }, {
        sequelize,
    freezeTableName: true,
    modelName: tableName,
    timestamps: false
    });
}

var ProductCategoryModel = initialize(sequelize,DataTypes);
/*** exported for usage */
module.exports = ProductCategoryModel;