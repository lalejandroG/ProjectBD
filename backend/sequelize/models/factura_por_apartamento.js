module.exports = (sequelize, DataTypes) => {
    const Factura_por_apartamento = sequelize.define(
      'Factura_por_apartamento', {
        Anno: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false
        },
        Monto: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        Mes: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false
        },
        Fecha_Vencimiento: {
          type: DataTypes.STRING,
          allowNull: false
        },
        Fecha_Pago: {
          type: DataTypes.STRING
        },
        apartamento_Codigo: {
          type: DataTypes.STRING,
          primaryKey: true,
          allowNull: false
        }
      }, {});

Factura_por_apartamento.associate = function(models) {
  Factura_por_apartamento.belongsTo(models.Apartamento, {
    foreignKey: 'apartamento_Codigo',
    target: 'Codigo'
  });


}

return Factura_por_apartamento;
};