import React from "react";
import { Heading, Text, SimpleGrid, Table, Tr, Td, Button, Link } from "@chakra-ui/react";


const Propietario = ({ propietarios }) => {

    return (
        <SimpleGrid columns={[1]}>
            <Table>

                <Tr>
                    <Td>ID</Td>
                    <Td>Nombre</Td>
                    <Td>Apellido</Td>
                    <Td>Cedula</Td>
                </Tr>

                

            {propietarios.map((propietario) => {

                return (
                    
                    
                    <Tr key={propietario.id}>
                        <Td>{propietario.id}</Td>
                        <Td>{propietario.nombre}</Td>
                        <Td>{propietario.apellido}</Td>
                        <Td>{propietario.CI}</Td>
                    </Tr>
                    
                    
                )
            })}

                
            </Table>

            

        </SimpleGrid>
    )

}




export default Propietario;