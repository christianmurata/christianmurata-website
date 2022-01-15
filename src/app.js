import { ChakraProvider, Box, Heading } from '@chakra-ui/react';

import Navbar from './components/navbar';
import theme from './libs/theme';

function App() {
	return (
		<ChakraProvider theme={theme}>
			<Box>
				<Navbar />
			</Box>
		</ChakraProvider>
	);
}

export default App;