//Conexion con la Base de Datos.
import Sequelize from 'sequelize'


const sequelize = new Sequelize('mycondo', 'root', 'carloseduardo0', {  //Modifica los datos para conectarse a la Bd que se necesite
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false,
        freezeTableName: true
    }
});

const models = {
    apartamento: sequelize.import('./apartamento'),
    chat: sequelize.import('./chat'),
    condominio: sequelize.import('./condominio'),
    edificio: sequelize.import('./edificio'),
    enviar_mensaje: sequelize.import('./enviar_mensaje'),
    gasto_de_edificio: sequelize.import('./gasto_de_edificio'),
    lugar_de_ocio: sequelize.import('./lugar_de_ocio'),
    paga_factura: sequelize.import('./paga_factura'),
    pais: sequelize.import('./pais'),
    propietario: sequelize.import('./propietario'),
    reservacion: sequelize.import('./reservacion'),
    rol: sequelize.import('./rol')
}


models.sequelize = sequelize
models.Sequelize = Sequelize

module.exports = models