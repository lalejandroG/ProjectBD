const resolvers = {

    Query: {


        async Roles(root, args, { models }){
            return await models.rol.findAll();
        },
        async Condominios(root, args, { models }){
            return await models.condominio.findAll();
        },
        async TiposDeGasto(root, args, { models }){
            return await models.tipo_de_gasto.findAll();
        },
        async Edificios(root, args, { models }){
            return await models.edificio.findAll();
        },
        async Apartamentos(root, args, { models }){
            return await models.apartamento.findAll();
        },
        async Facturas_por_apartamento(root, args, { models }){
            return await models.factura_por_apartamento.findAll();
        },
        async Propietarios(root, args, { models }){
            return await models.propietario.findAll();
        },
        async Lugares_de_ocio(root, args, { models }){
            return await models.lugar_de_ocio.findAll();
        },

    },



    Mutation: {


        async createRol(root, { Rol }, { models }){
            return await models.rol.create({ Rol })
        },

        async createCondominio(root, { Nombre }, { models }){
            return await models.condominio.create({ Nombre })
        },

        async createTipoDeGasto(root, { Descripcion }, { models }){
            return await models.tipo_de_gasto.create({ Descripcion })
        },
        
    }


}

module.exports = resolvers