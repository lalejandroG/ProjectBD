module.exports = (sequelize, DataTypes) => {
    const Condominio =sequelize.define('condominio',{
    
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
    
        nombre:{
            type: DataTypes.STRING(50),
            allowNull: false
        },
    
       
    
    }, {});
    
return Condominio
    
}