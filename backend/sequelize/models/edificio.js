module.exports = (sequelize, DataTypes) => {
  const Edificio = sequelize.define(
    'Edificio', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      Nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      condominio_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {});


return Edificio;
};