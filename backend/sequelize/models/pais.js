module.exports = (sequelize,DataTypes) => {
    const Pais = sequelize.define('pais',{
    
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
    
    
return Pais;
    
}
    