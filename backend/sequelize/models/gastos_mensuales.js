module.exports = (sequelize, DataTypes) => {
  const Gastos_mensuales = sequelize.define(
    'Gastos_mensuales', {
      Anno: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      Mes: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      Monto: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      Fecha_Pago: {
        type: DataTypes.DATE,
        allowNull: false
      },
      Modo_Pago: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Proveedor: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Numero_Factura: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      condominio_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      tipo_de_gasto_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {});

Gastos_mensuales.associate = function(models) {
Gastos_mensuales.belongsTo(models.Condominio, {
  foreignKey: 'condominio_id',
  target: 'id'
});

Gastos_mensuales.belongsTo(models.Tipo_de_gasto, {
  foreignKey: 'tipo_de_gasto_id',
  target: 'id'
});


}

return Gastos_mensuales;
};