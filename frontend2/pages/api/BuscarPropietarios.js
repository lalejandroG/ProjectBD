import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
});

export default async (req, res) => {
    const search = req.body;
    try {
        const { data } = await client.query({
            query: gql `
                query{
                    searchPropietarios(filter: {nombre: "${search}"}) {
                        id
                        nombre
                        apellido
                        CI
                    }
                }
            `,
        });
        res.status(200).json({ propietarios: data.searchPropietarios, error: null });
    } catch (error) {
        if (error.message === "404: Not Found") {
            res.status(404).json({ propietarios: null, error: "No se encontro Propietario" });
        } else {
            res.status(500).json({ propietarios: null, error: "Internal Error" });
        }
    }
};