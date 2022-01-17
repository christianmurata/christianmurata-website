import { Container } from '@chakra-ui/react';
import Navbar from './navbar';

const Page = ({ children }) => {
  return (
    <>
      <Navbar />

      <Container pt={'5rem'}>
        { children }
      </Container>
    </>
  )
}

export default Page;