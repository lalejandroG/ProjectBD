
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express')

//Models

const models = require('./sequelize/models/index');
models.sequelize.authenticate().then(() => { //Conexion con la BD
    console.log("Estas conectado a la BD")
});

models.sequelize.sync() //Sincronizacion de los modelos con la BD
//------------------

//GraphQL
//Resolvers
import resolvers from './graphQL/resolvers/resolvers'


//typeDefs
import typeDefs from './graphQL/typeDefs/typeDefs'
//------------------

const server = new ApolloServer({ typeDefs, resolvers, context: { models }})
const app = express();
server.applyMiddleware( {app} );

app.listen({ port: 4000 }, () => {
    console.log("Corriendo Servidor Apollo en http://localhost:4000" + server.graphqlPath)
})


