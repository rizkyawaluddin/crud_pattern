/*** Table Name ***/
var tableName = 'profile';

/*** Same for all Models */
const Base = require('./Base');
class profile extends Base.Model {}
const sequelize = Base.sequelize;
const DataTypes = Base.Sequelize;

/*** Model Structure Define  Here */
function initialize(sequelize,DataTypes){
    return profile.init({
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'name'
		},
		phone: {
			type: DataTypes.STRING(13),
			allowNull: false,
			field: 'phone'
		},
		gender: {
			type: DataTypes.STRING(50),
			allowNull: false,
			field: 'gender'
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

var profileModel = initialize(sequelize,DataTypes);
/*** exported for usage */
module.exports = profileModel;