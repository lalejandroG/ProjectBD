module.exports = (sequelize, DataTypes) => {
    const Apartamento = sequelize.define(
      'Apartamento', {
        Codigo: {
          type: DataTypes.STRING,
          primaryKey: true,
          allowNull: false
        },
        Piso: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        edificio_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      }, {});

Apartamento.associate = function(models) {
  Apartamento.belongsTo(models.Edificio, {
    foreignKey: 'edificio_id',
    target: 'id'
  });


}

return Apartamento;

};