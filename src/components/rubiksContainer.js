import { forwardRef } from "react";
import { Box } from "@chakra-ui/react";

const RubiksContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="rubiks"
    m="auto"
    mt={['-50px', '-140px', '-200px']}
    mb={['-80px', '-140px', '-200px']}
    w={[280, 480, 640]}
    h={[280, 480, 640]}
    position="relative"
  >
    {children}
  </Box>
))

export default RubiksContainer;