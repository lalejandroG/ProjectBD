module.exports = (sequelize, DataTypes) => {
    const edificio = sequelize.define("edificio",{
    
    
      id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
    
    
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
    
    
    }, {});
    
    return edificio

}