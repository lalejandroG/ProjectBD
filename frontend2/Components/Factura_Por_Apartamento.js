import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Table, Tr, Td} from "@chakra-ui/react";

const query = gql `{
  Facturas_por_apartamento{
    Anno
    Mes
    Monto
    Fecha_Vencimiento
    Fecha_Pago
    apartamento_Codigo
  }
}`;


export default function FacturaApartamento() {
    const runningQuery = useQuery(query);
    let Facturas_por_apartamento = runningQuery.data && runningQuery.data.Facturas_por_apartamento;

    return runningQuery.error ? <div>Error in GraphQL query : <pre>{JSON.stringify(runningQuery.error, null, 2)}</pre></div> :
    !Facturas_por_apartamento ? <div>Loading...</div> :
    <div>Data de Facturas de los Apartamentos
        <br></br>

        <Table>
            <Tr>
                <Td>Año</Td>
                <Td>Mes</Td>
                <Td>Monto a pagar</Td>
                <Td>Fecha de vencimiento</Td>
                <Td>Fecha en la que se pago</Td>
                <Td>Código del Apartamento</Td>
            </Tr>
            {Facturas_por_apartamento.map(Facturas_por_apartamento => 
            <Tr>
                <Td>{Facturas_por_apartamento.Anno}</Td>
                <Td>{Facturas_por_apartamento.Mes}</Td>
                <Td>{Facturas_por_apartamento.Monto}</Td>
                <Td>{Facturas_por_apartamento.Fecha_Vencimiento}</Td>
                <Td>{Facturas_por_apartamento.Fecha_Pago}</Td>
                <Td>{Facturas_por_apartamento.apartamento_Codigo}</Td>
            </Tr>
            )}
            
        </Table>
        
    </div>
}