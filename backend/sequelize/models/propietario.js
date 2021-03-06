module.exports = (sequelize,DataTypes) => {
    const Propietario = sequelize.define('propietario',{
    
        id: {
             type: DataTypes.INTEGER,
             autoIncrement: true,
             primaryKey: true,
             allowNull: false
        },
    
         nombre: {
              type: DataTypes.STRING(50),
              allowNull: false,
         },
    
         apellido: {
            type: DataTypes.STRING(50),
            allowNull: false,
       },
    
          CI: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
    
          active: {
           type: DataTypes.BOOLEAN,
           allowNull: false
          }
    
    
    }, {});
    
return Propietario
}  