import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Table, Tr, Td} from "@chakra-ui/react";

const query = gql `{
   Propietarios{
        id
        Nombre
        Apellido
        CI
        apartamento_Codigo
        rol_id
  }
}`;


export default function Propietarios() {
    const runningQuery = useQuery(query);
    let Propietarios = runningQuery.data && runningQuery.data.Propietarios;

    return runningQuery.error ? <div>Error in GraphQL query : <pre>{JSON.stringify(runningQuery.error, null, 2)}</pre></div> :
    !Propietarios ? <div>Loading...</div> :
    <div>Data de Propietarios 
        <br></br>

        <Table>
            <Tr>
                <Td>ID</Td>
                <Td>Nombre</Td>
                <Td>Apellido</Td>
                <Td>CI</Td>
                <Td>Apartamento</Td>
                <Td>ID de rol</Td>
            </Tr>
            {Propietarios.map(Propietarios => 
            <Tr>
                <Td>{Propietarios.id}</Td>
                <Td>{Propietarios.Nombre}</Td>
                <Td>{Propietarios.Apellido}</Td>
                <Td>{Propietarios.CI}</Td>
                <Td>{Propietarios.apartamento_Codigo}</Td>
                <Td>{Propietarios.rol_id}</Td>
            </Tr>
            )}
            
        </Table>
        
    </div>
}