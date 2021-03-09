module.exports = (sequelize, DataTypes) => {
  const Lugar_de_ocio = sequelize.define(
    'Lugar_de_ocio', {
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
      Disponible: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      condominio_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      propietario_id: {
        type: DataTypes.INTEGER,
        unique: true
      }
    }, {});

Lugar_de_ocio.associate = function(models) {
Lugar_de_ocio.belongsTo(models.Condominio, {
  foreignKey: 'condominio_id',
  target: 'id'
});


}

return Lugar_de_ocio;
};