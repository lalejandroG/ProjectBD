import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"


function MyApp ({ Component, pageProps }){
  const clientParam = { uri: "http://localhost:4000/graphql", cache: new InMemoryCache() }
  const client = new ApolloClient(clientParam)

  return(

    <di>
      <ApolloProvider client={client}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </ApolloProvider>

    </di>



  ) 
}

export default MyApp
