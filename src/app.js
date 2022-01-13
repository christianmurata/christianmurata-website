

import { ChakraProvider, Box, Heading } from "@chakra-ui/react";

function App() {
	return (
		<ChakraProvider>
			<Box>
				<Heading>Hello from chakra-ui</Heading>
			</Box>
		</ChakraProvider>
	)
}

export default App;