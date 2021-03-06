import Head from 'next/head';
import { useState } from 'react';
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import styles from '../styles/Home.module.css';
import { Heading, Box, Flex, Link } from "@chakra-ui/react";
import Rol from "../Components/Rol"

export default function Home() {

  return (
    <Flex direction="column" justify="center" align="center">
      <Head>
        <title>MyCondo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Box mb={4} flexDirection="column" align="center" justify="center" py={8}>

      <ul>
          <li>
              <Link>
                  <a href="/listaPropietarios">Lista de Propietarios</a>
               </Link>
          </li>
          <li>
              <Link>
                  <a href="/listaRoles">Lista de Roles</a>
              </Link>
          </li>
          <li>
              <Link>
                  <a href="/listaApartamentos">Lista de Apartamentos</a>
              </Link>
          </li>
          <li>
              <Link>
                  <a href="/FacturaApartamento">Facturas por Apartamento</a>
              </Link>
          </li>
      </ul>
        

        <Heading as="h1" size="2xl" mb={8}>
          MyCondo
        </Heading>


        


      </Box>

      <footer className={styles.footer}>
        
      </footer>
      </Flex>
  )
}






