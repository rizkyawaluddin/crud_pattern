/*** Table Name ***/
var tableName = 'category';

/*** Same for all Models */
const Base = require('./Base');
class Category extends Base.Model {}
const sequelize = Base.sequelize;
const DataTypes = Base.Sequelize;

/*** Model Structure Define  Here */
function initialize(sequelize,DataTypes){
    return Category.init({
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		category_name: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'category_name'
		},
    }, {
        sequelize,
    freezeTableName: true,
    modelName: tableName,
    timestamps: false
    });
}

var CategoryModel = initialize(sequelize,DataTypes);
/*** exported for usage */
module.exports = CategoryModel;