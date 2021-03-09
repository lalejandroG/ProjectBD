import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Table, Tr, Td} from "@chakra-ui/react";

const query = gql `{
    Apartamentos{
        Codigo
        Piso
        edificio_id
    }
}`;


export default function Apartamento() {
    const runningQuery = useQuery(query);
    let Apartamentos = runningQuery.data && runningQuery.data.Apartamentos;

    return runningQuery.error ? <div>Error in GraphQL query : <pre>{JSON.stringify(runningQuery.error, null, 2)}</pre></div> :
    !Apartamentos ? <div>Loading...</div> :
    <div>Data de Apartamentos 
        <br></br>

        <Table>
            <Tr>
                <Td>Codigo</Td>
                <Td>Piso</Td>
                <Td>ID de Edificio</Td>
            </Tr>
            {Apartamentos.map(Apartamentos => 
            <Tr>
                <Td>{Apartamentos.Codigo}</Td>
                <Td>{Apartamentos.Piso}</Td>
                <Td>{Apartamentos.edificio_id}</Td>
            </Tr>
            )}
            
        </Table>
        
    </div>
}