import React, { useState, useCallback } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import { Table, Tr, Td, Button, Input } from "@chakra-ui/react";

const query = gql `{
    Roles{
        id
        Rol
  }
}`;

const mutation = gql `
    mutation ($Rol: String!){
        createRol(Rol: $Rol){
            id
            Rol
        }
    }
`;

export default function Rol() {
    const [myMutation] = useMutation(mutation);
    const runningQuery = useQuery(query);
    const [isSending, setIsSending] = useState(false);
    const [newRol, setNewRol] = useState('');
    const [rolFromMutation, setRolFromMutation] = useState(null);
    const sendRequest = useCallback(async (newRol) => {
        if (isSending) return;
        setIsSending(true);
        let result = await myMutation({ variables: { Rol: newRol } });
        setIsSending(false);
        setRolFromMutation(result.data.createRol);
    }, [isSending]); 

    let Roles = rolFromMutation || (runningQuery.data && runningQuery.data.Roles);

    return runningQuery.error ? <div>Error in GraphQL query : <pre>{JSON.stringify(runningQuery.error, null, 2)}</pre></div> :
    !Roles ? <div>Loading...</div> :
    <div>Data de Roles 
        <br></br>
        Nuevo Rol: <Input type="text" width="250px" value={newRol} onChange={e => setNewRol(e.target.value)} />
        <Button disabled={isSending} onClick={() => sendRequest(newRol)} >Crear Rol</Button>
        <Table>
            <Tr>
                <Td>ID</Td>
                <Td>Rol</Td>
            </Tr>
            {Roles.map(Roles => 
            <Tr>
                <Td>{Roles.id}</Td>
                <Td>{Roles.Rol}</Td>
            </Tr>
            )}
            
        </Table>
        
    </div>
}