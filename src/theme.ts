import { ThemeConfig, extendTheme, StyleFunctionProps } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode("gray.50", "gray.800")(props),
      },
    }),
  },
  components: {
    Button: {
      variants: {
        solid: (props: StyleFunctionProps) => ({
          bg: props.colorMode === "light" ? "blackAlpha.100" : "whiteAlpha.200",
          backdropFilter: "blur(4px)",
          _hover: {
            bg:
              props.colorMode === "light" ? "blackAlpha.200" : "whiteAlpha.300",
          },
        }),
      },
    },
  },
});

export default theme;
