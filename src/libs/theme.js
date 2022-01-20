import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
};

const styles = {
  global: props => ({
    body: {
      bg: mode('#F3F4ED', '#212121')(props)
    }
  })
};

const components = {
  Heading: {
    variants: {
      'section-title': props =>  ({
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: mode('#C06014', '#14FFEC')(props),
        textDecorationThickness: 4,
        marginTop: 4,
        marginBottom: 4
      })
    }
  },
};

const theme = extendTheme({ config, styles, components });

export default theme;