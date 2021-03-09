const { gql } = require('apollo-server-express')

const typeDefs = gql`

type Rol{
    id: Int!
    Rol: String!
}

type Condominio{
    id: Int!
    Nombre: String!
}

type Tipo_de_gasto{
    id: Int!
    Descripcion: String!
}

type Edificio{
    id: Int!
    Nombre: String!
    condominio_id: Int!
}

type Apartamento{
    Codigo: String!
    Piso: Int!
    edificio_id: Int!
}

type Factura_por_apartamento{
    Anno: Int!
    Monto: Int!
    Mes: Int!
    Fecha_Vencimiento: String!
    Fecha_Pago: String
    apartamento_Codigo: String!
}

type Gastos_mensuales{
    Anno: Int!
    Mes: Int!
    Monto: Int!
    Fecha_Pago: String!
    Modo_Pago: String!
    Proveedor: String!
    Numero_Factura: Int!
    condominio_id: Int!
    tipo_de_gasto_id: String!
}

type Propietario{
    id: Int!
    Nombre: String!
    Apellido: String!
    CI: Int!
    Active: Boolean!
    apartamento_Codigo: String!
    rol_id: Int!
}

type Lugar_de_ocio{
    id: Int!
    Nombre: String!
    Disponible: Boolean!
    condominio_id: Int!
    propietario_id: Int!
}



# input filterPropietario {
#     nombre: String!
# }

# input newPropietario {
#     nombre: String!
#     apellido: String!
#     CI: Int!
#     active: Boolean!
# }



type Query{

    Roles: [Rol]
    Condominios: [Condominio]
    TiposDeGasto: [Tipo_de_gasto]
    Edificios: [Edificio]
    Apartamentos: [Apartamento]
    Facturas_por_apartamento: [Factura_por_apartamento]
    Propietarios: [Propietario]
    Lugares_de_ocio: [Lugar_de_ocio]

}




type Mutation{

    createRol(Rol: String!): Rol!
    createCondominio(Nombre: String!): Condominio!
    createTipoDeGasto(Descripcion: String!): Tipo_de_gasto!

    


    


}



`

module.exports = typeDefs