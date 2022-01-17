import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import Page from "../components/page"

const Home = () => {
  return (
    <Page>
      <Container w='100%'>
        <Box
          p='3'
          borderRadius='lg'
          textAlign='center'
          bg={useColorModeValue('#ffffff', '#323232')}
        >
          <h1>Hello from home page!</h1>
        </Box>
      </Container>
    </Page>
  );
}

export default Home;