import { motion, AnimatePresence } from 'framer-motion';
import { ChakraProvider, Box } from '@chakra-ui/react';

import theme from './libs/theme';
import Navigation from './navigation';

function App() {
	return (
		<ChakraProvider theme={theme}>
			<AnimatePresence exitBeforeEnter initial={true}>
				<Navigation />
			</AnimatePresence>
		</ChakraProvider>
	);
}

export default App;