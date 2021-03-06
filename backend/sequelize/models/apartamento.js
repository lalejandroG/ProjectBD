module.exports = (sequelize, DataTypes) => {
    const Apartamento = sequelize.define('apartamento', {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },

        codigo: {
            type: DataTypes.STRING(15),
            allowNull: false
        }
    }, {});

return Apartamento

}