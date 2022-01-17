import { ChakraProvider, Box, Heading } from '@chakra-ui/react';

import theme from './libs/theme';
import Home from './pages/home';

function App() {
	return (
		<ChakraProvider theme={theme}>
			<Box>
				<Home />				
			</Box>
		</ChakraProvider>
	);
}

export default App;