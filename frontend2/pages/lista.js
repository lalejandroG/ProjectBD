import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Head from 'next/head';
import Propietario from '../Components/Propietario';
import styles from '../styles/Home.module.css';
import { Heading, Input, Stack, IconButton, Box, Flex, useToast, Button, Link } from "@chakra-ui/react";
import {CloseIcon, SearchIcon} from "@chakra-ui/icons";
import { useState } from 'react';

function Lista(Propietarios) {
  const intialState = Propietarios;
  const [propietarios, setPropietarios] = useState(intialState.propietarios);
  const [search, setSearch] = useState("");
  const toast = useToast();


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

          <form onSubmit={async (event) => {
          event.preventDefault();
          const getPropietarios = await fetch("/api/BuscarPropietarios", {
            method: "post",
            body: search,
          });
          const { propietarios, error } = await getPropietarios.json();
          if(error) {
            toast({
              position: "bottom",
              title: "Ocurrio un Error",
              description: error,
              status: "error",
              duration: 5000,
              isClosable: true,
            });
          } else {
            setPropietarios(propietarios);
          }
        }}>
          <Stack maxWidth="350px" width="100%" isInline mb={8}>
            <Input placeholder="Buscar" value={search} border="none" onChange={(e) => setSearch(e.target.value)}></Input>
            <IconButton colorScheme="blue" aria-label="Buscar en la BD" icon={<SearchIcon/>} disabled={search === ""} type="submit"/>
            <IconButton colorScheme="red" aria-label="Resetear" icon={<CloseIcon/>} onClick={async () => {
              setSearch("");
              setPropietarios(intialState.propietarios);
            }}/>
          </Stack>
        </form>

        <Link>
            <a href="/crearpropietario">Crear un Propietario</a>
        </Link>
        
        
        <Propietario propietarios={propietarios} />
          

        </Box>

        <footer className={styles.footer}>
        
        </footer>

      </Flex>
 
    )

}

export async function getStaticProps() {
    const client = new ApolloClient({
      uri: "http://localhost:4000/graphql",
      cache: new InMemoryCache()
    });
  
    const { data } = await client.query({
      query: gql`
        query{
          getPropietarios{
            id
            nombre
            apellido
            CI
          }
        }
      `
  
    });
    
  
    return {
      props: {
        propietarios: data.getPropietarios
      }
    }
  }

export default Lista;