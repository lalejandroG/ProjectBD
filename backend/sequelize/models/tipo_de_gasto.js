module.exports = (sequelize, DataTypes) => {
    const Tipo_de_gasto = sequelize.define(
      'Tipo_de_gasto', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        Descripcion: {
          type: DataTypes.STRING,
          allowNull: false
        }
      }, {});

return Tipo_de_gasto;
};