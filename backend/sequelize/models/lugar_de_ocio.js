module.exports = (sequelize,DataTypes) => {
    const Lugar_de_ocio=sequelize.define('lugar_de_ocio',{
    
     id:{
       type: DataTypes.INTEGER,
       autoIncrement: true,
       primaryKey: true,
       allowNull: false
     },
    
    nombre:{
    type: DataTypes.STRING(50),
    allowNull: false
    }
    
    }, {});
    
return Lugar_de_ocio
    
    
}
    