import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Heading, Input, Stack, IconButton, Box, Flex, useToast, Button, Link } from "@chakra-ui/react";
import Apartamento from "../Components/Apartamento"

function listaApartamentos() {

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
                      <a href="/">Home</a>
                  </Link>
              </li>
              <li>
                  <Link>
                      <a href="/listaRoles">Lista de Roles</a>
                  </Link>
              </li>
              <li>
                  <Link>
                      <a href="/listaPropietarios">Lista de Propietarios</a>
                  </Link>
              </li>
              <li>
                  <Link>
                      <a href="/FacturaApartamento">Lista de Facturas</a>
                  </Link>
              </li>
          </ul>

          <Heading as="h1" size="2xl" mb={8}>
            MyCondo
          </Heading>

          <Apartamento></Apartamento>

        
        
        
          

        </Box>

        <footer className={styles.footer}>
        
        </footer>

      </Flex>
 
    )

}

export default listaApartamentos;