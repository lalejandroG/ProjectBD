module.exports = (sequelize,DataTypes) => {
    const Reservacion = sequelize.define('reservacion',{
    
    
    hora:{
    type: DataTypes.TIME,
    allowNull: false
    }    
    
    
    }, {});
    
return Reservacion
    
}