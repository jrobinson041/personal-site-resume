import {
  ThemeConfig,
  extendTheme,
  StyleFunctionProps,
  transition,
  textDecoration,
} from "@chakra-ui/react";
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
        bg: mode("gray.50", "gray.700")(props),
      },
    }),
  },
  semanticTokens: {
    shadows: {
      "hover.lg": {
        default: "20px 20px 60px #d2d5d6, -20px -20px 60px #ffffff;",
        _dark: "20px 20px 60px #262f3d, -20px -20px 60px #343f53;",
      },
      "hover.sm": {
        default: "5px 5px 15px #d2d5d6, -5px -5px 15px #ffffff;",
        _dark: "5px 5px 15px #262f3d, -5px -5px 15px #343f53;",
      },
      "hover.xs": {
        default: "3px 3px 8px #d2d5d6, -3px -3px 8px #ffffff;",
        _dark: "3px 3px 8px #262f3d, -3px -3px 8px #343f53;",
      },
      "inset.lg": {
        default:
          "inset 20px 20px 60px #d2d5d6, inset -20px -20px 60px #ffffff;",
        _dark: "inset 20px 20px 60px #262f3d, inset -20px -20px 60px #343f53;",
      },
      "inset.sm": {
        default: "inset 5px 5px 15px #d2d5d6, inset -5px -5px 15px #ffffff;",
        _dark: "inset 5px 5px 15px #262f3d, inset -5px -5px 15px #343f53;",
      },
      "inset.header": {
        default: "inset 5px 5px 15px #d2d5d6, inset -5px -5px 15px #ffffff;",
        _dark: "inset 5px 5px 15px #3f4858, inset -5px -5px 15px #556278;",
      },
    },
    colors: {
      roundedIn: {
        default: "linear-gradient(165deg, #dee1e3, #ffffff);",
        _dark: "linear-gradient(145deg, #293241, #303b4d);",
      },
      roundedOut: {
        default: "linear-gradient(165deg, #ffffff, #dee1e3);",
        _dark: "linear-gradient(145deg, #303b4d, #293241);",
      },
    },
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
        hovering: (props: StyleFunctionProps) => ({
          bg: "roundedOut",
          // boxShadow: "hover.sm",
          backdropFilter: "blur(4px)",
          _hover: {
            boxShadow: "inset.sm",
            bg: "roundedOut",
            textDecoration: "none",
          },
          transition: "all 0.2s ease-in-out",
        }),
      },
    },
  },
});

export default theme;
