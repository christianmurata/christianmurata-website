import { Container } from '@chakra-ui/react';

import Footer from './footer';
import Navbar from './navbar';
import Rubiks from './rubiks';

const Page = ({ children }) => {
  return (
    <>
      <Navbar />

      <Rubiks />

      <Container position={'relative'} pt={'1rem'} maxW={'cotainer.md'} zIndex={1}>
        {children}
      </Container>

      <Footer />
    </>
  )
}

export default Page;