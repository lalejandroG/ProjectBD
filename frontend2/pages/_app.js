import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache()
  });
  return(

    <ApolloProvider client={client}>
      <ChakraProvider>
          <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>

  ) 
}

export default MyApp
