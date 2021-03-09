module.exports = (sequelize, DataTypes) => {
    const Rol = sequelize.define(
      'Rol', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        Rol: {
          type: DataTypes.STRING,
          allowNull: false
        }
      }, {});

return Rol;
};