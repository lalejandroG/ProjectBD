module.exports = (sequelize, DataTypes) => {
    const Gasto_de_edificio = sequelize.define('gasto_de_edificio',{
    
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    
    
    motivo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    
    
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    monto: {
     type: DataTypes.DOUBLE,
     alowNull: false
    }
    
    
    
    
    }, {});
    
    
    
return Gasto_de_edificio
    
    
}
    