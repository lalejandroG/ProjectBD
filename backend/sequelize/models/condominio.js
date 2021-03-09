module.exports = (sequelize, DataTypes) => {
    const Condominio = sequelize.define(
      'Condominio', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        Nombre: {
          type: DataTypes.STRING,
          allowNull: false
        }
      }, {});

      Condominio.associate = function(models) {
      Condominio.hasMany(models.Edificio, {
        foreignKey: 'Condominio_Id',
        target: 'Id'
      });
    }

return Condominio;
};