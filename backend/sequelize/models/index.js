//Conexion con la Base de Datos.
import Sequelize from 'sequelize'


const sequelize = new Sequelize('mycondov2', 'root', 'carloseduardo0', {  //Modifica los datos para conectarse a la Bd que se necesite
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false,
        freezeTableName: true
    }
});

const models = {
    rol: sequelize.import('./rol'),
    condominio: sequelize.import('./condominio'),
    tipo_de_gasto: sequelize.import('./tipo_de_gasto'),
    edificio: sequelize.import('./edificio'),
    apartamento: sequelize.import('./apartamento'),
    factura_por_apartamento: sequelize.import('./factura_por_apartamento'),
    propietario: sequelize.import('./propietario'),
    lugar_de_ocio: sequelize.import('./lugar_de_ocio'),
    gastos_mensuales: sequelize.import('./gastos_mensuales')

}


models.sequelize = sequelize
models.Sequelize = Sequelize

module.exports = models