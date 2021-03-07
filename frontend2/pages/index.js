import Head from 'next/head';
import { useState } from 'react';
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import styles from '../styles/Home.module.css';
import { Heading, Input, Stack, IconButton, Box, Flex, useToast, Button, Link } from "@chakra-ui/react";
import Propietario from '../Components/Propietario';
import { CloseIcon, SearchIcon } from '@chakra-ui/icons';

export default function Home( getPropietarios ) {
  const intialState = getPropietarios;
  const [propietarios, setPropietarios] = useState(intialState.propietarios);

  return (
    <Flex direction="column" justify="center" align="center">
      <Head>
        <title>MyCondo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Box mb={4} flexDirection="column" align="center" justify="center" py={8}>

        <Link>
          <a href="/lista">Lista de Propietarios</a>
        </Link>
        

        <Heading as="h1" size="2xl" mb={8}>
          MyCondo
        </Heading>

        


      </Box>

      <footer className={styles.footer}>
        
      </footer>
      </Flex>
  )
}

export async function getPropietarios() {
  return (
    <Propietario propietarios={propietarios}/>
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
