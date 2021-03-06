const apartamento = require("./models/apartamento");
const chat = require("./models/chat");
const condominio = require("./models/condominio");
const edificio= require("./models/edificio")
const envia_mensaje = require("./models/envia_mensaje");
const gasto_de_edificio = require("./models/gasto de edificio");
const lugar_de_ocio = require("./models/lugar_de_ocio");
const paga_factura = require("./models/paga_factura");
const pais = require("./models/pais");
const propietario = require("./models/propietario");
const reservacion = require("./models/reservacion");
const rol = require("./models/rol");





condominio.hasOne(pais);
pais.belongsTo(condominio);

edificio.hasOne(condominio)
condominio.belongsTo(edificio);

propietario.hasOne(apartamento);
apartamento.belongsTo(propietario);

