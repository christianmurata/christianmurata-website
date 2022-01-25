import { Container } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

const Page = ({ children }) => {
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <>
        <Container position={'relative'} pt={'1rem'} maxW={'cotainer.md'} zIndex={1}>
          {children}
        </Container>
      </>
    </motion.article>
  )
}

export default Page;