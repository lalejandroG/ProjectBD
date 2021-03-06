const { gql } = require('apollo-server-express')

const typeDefs = gql`

type propietario{
    id: Int!
    nombre: String!
    apellido: String!
    CI: Int!
    active: Boolean!
},

type apartamento{
    id: Int!
    codigo: String!
},

type chat{
    id: Int!
    nombre_chat: String!
},

type condominio{
    id: Int!
    nombre: String!
},

type edificio{
    id: Int!
    nombre: String!
},

type envia_mensaje{
    mensaje: String!
},

type gasto_de_edificio{
    id: Int!
    motivo: String!
    dscripcion: String!
    monto: Float!
},

type lugar_de_ocio{
    id: Int!
    nombre: String!
},

type pais{
    id: Int!
    nombre: String!
},

type reservacion{
    hora: Int!
},

type rol{
    id: Int!
    rol: String!
}

input filterPropietario {
    nombre: String!
}



type Query{

#--------------------Queries de Propietario--------------------

    getPropietarios: [propietario!]!
    getPropietarios0: [propietario]
    getPropietarioNA(nombre: String!, apellido: String!): propietario! 
    searchPropietarios(filter: filterPropietario): [propietario!]!
}




type Mutation{

#--------------------Mutations de Propietario--------------------

    createPropietario(nombre: String!, apellido: String!, CI: Int!, active: Boolean!): propietario!
    updatePropietario(nombre: String!, apellido: String!): propietario!
    deletePropietario(nombre: String!, apellido: String!): propietario!

}



`

module.exports = typeDefs