import "../styles/globals.scss";

import { ChakraProvider, Box } from "@chakra-ui/react";

import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Header />
      <Box className={`App bg-gradation`}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
