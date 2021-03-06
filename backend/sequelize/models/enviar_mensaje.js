module.exports = (sequelize, DataTypes) => {
    const Envia_mensaje = sequelize.define('envia_mensaje',{
    
    mensaje:{
        type:DataTypes.STRING,
        alloNull:true 
    }
    
    
    
    }, {});
    
        
return Envia_mensaje
    
    
}