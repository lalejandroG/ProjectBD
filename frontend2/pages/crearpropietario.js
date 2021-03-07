import { ApolloClient, InMemoryCache, gql, useMutation, useQuery } from "@apollo/client";
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Heading, Input, Stack, IconButton, Box, Flex, useToast, Button, Link, GridItem } from "@chakra-ui/react";
import { useState } from 'react';


const CPropietario = gql `
    mutation createPropietario($nombre: String!, $apellido: String!, $CI: Int!, $active: Boolean!){
        createPropietario(nombre: $nombre , apellido: $apellido, CI: $CI, active: true){
            id
            nombre
            apellido
            CI
            active
        }
    }
`


function CrearPropietario() {
    let input;
    const [createPropietario, { data }]= useMutation(CPropietario);

    return (
        <Flex direction="column" justify="center" align="center">
        <Head>
          <title>MyCondo</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Box mb={4} flexDirection="column" align="center" justify="center" py={8}>

          <Link>
            <a href="/">Home</a>
          </Link>

          <Heading as="h1" size="2xl" mb={8}>
            MyCondo
          </Heading>

          <div>
              <form onSubmit={e => {
                  e.preventDefault();
                  createPropietario({ variables: { nombre: input.value } });
                  input.value = '';
              }}>
                  <input
                    ref={node => {
                        input = node;
                    }}/>
                    <Button type="submit">Crear Propietario</Button>
              </form>
          </div>
        

        <Link>
            <a href="/lista">Lista de Propietarios</a>
        </Link>


          
        </Box>

        <footer className={styles.footer}>
        
        </footer>

      </Flex>
    )
}


export default CrearPropietario;