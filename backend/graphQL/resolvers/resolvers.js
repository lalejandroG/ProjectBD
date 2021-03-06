const resolvers = {

    Query: {

//Queries de propietario
        async getPropietarios(root, args, { models }){
            return await models.propietario.findAll({
                where: {
                    active: 1 //Devuelve los propietarios activos
                }
            });
        },

        async getPropietarios0(root, args, { models }){
            return await models.propietario.findAll({
                where: {
                    active: 0 //Devuelve los propietarios inactivos
                }
            })
        },
        
        async getPropietarioNA(root, { nombre, apellido }, { models }){
            return await models.propietario.findOne({
                where: {
                    nombre,
                    apellido
                }
            })
        },

        async searchPropietarios(root, { filter: {nombre} }, { models }){
            return await models.propietario.findAll({ where: { nombre } })
        }
        

    },


    Mutation: {

//Mutations de propietario
        async createPropietario(root, { nombre, apellido, CI, active }, { models }){
            return await models.propietario.create({ nombre, apellido, CI, active })
        },
        //Desactiva al Propietario
        async deletePropietario(root, args, { models }){
            return await models.propietario.update({ active: 0 }, {where: { nombre: args.nombre, apellido: args.apellido }}) 
        }, 
        //Activa al Propietario
        async updatePropietario(root, args, { models }){
            return await models.propietario.update({ active: 1 }, {where: { nombre: args.nombre, apellido: args.apellido }})

        }
        
    }


}

module.exports = resolvers