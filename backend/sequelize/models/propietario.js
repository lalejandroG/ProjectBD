const rol = require("./rol");

module.exports = (sequelize, DataTypes) => {
     const Propietario = sequelize.define(
       'Propietario', {
         id: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           allowNull: false,
           unique: true,
           autoIncrement: true
         },
         Nombre: {
           type: DataTypes.STRING,
           allowNull: false
         },
         Apellido: {
           type: DataTypes.STRING,
           allowNull: false
         },
         CI: {
           type: DataTypes.INTEGER,
           allowNull: false,
           unique: true
         },
         Active: {
           type: DataTypes.BOOLEAN,
           allowNull: false
         },
         apartamento_Codigo: {
           type: DataTypes.STRING,
           allowNull: false
         },
         rol_id: {
           type: DataTypes.INTEGER,
           allowNull: false,
         }
       }, {});
 
 Propietario.associate = function(models) {
   Propietario.belongsTo(models.Apartamento, {
     foreignKey: 'apartamento_Codigo',
     target: 'Codigo'
   });
 
   Propietario.belongsTo(models.Rol), {
     foreignKey: "rol_id",
     target: "id"
   };
 
   Propietario.hasOne(models.Lugar_de_ocio, {
     foreignKey: 'propietario_id',
     target: 'id'
   });
 
 
 }
 
 return Propietario;
 };