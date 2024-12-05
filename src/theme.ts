import {
  ThemeConfig,
  extendTheme,
  StyleFunctionProps,
  transition,
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
        bg: mode("gray.50", "gray.800")(props),
      },
    }),
  },
  semanticTokens: {
    shadows: {
      "hover.lg": {
        default: "20px 20px 60px #d2d5d6, -20px -20px 60px #ffffff;",
        _dark: "20px 20px 60px #161b25, -20px -20px 60px #1e2533;",
      },
      "hover.sm": {
        default: "5px 5px 15px #d2d5d6, -5px -5px 15px #ffffff;",
        _dark: "5px 5px 15px #161b25, -5px -5px 15px #1e2533;",
      },
      "hover.xs": {
        default: "3px 3px 8px #d2d5d6, -3px -3px 8px #ffffff;",
        _dark: "3px 3px 8px #161b25, -3px -3px 8px #1e2533;",
      },
      "inset.lg": {
        default:
          "inset 20px 20px 60px #d2d5d6, inset -20px -20px 60px #ffffff;",
        _dark: "inset 20px 20px 60px #161b25, inset -20px -20px 60px #1e2533;",
      },
      "inset.sm": {
        default: "inset 5px 5px 15px #d2d5d6, inset -5px -5px 15px #ffffff;",
        _dark: "inset 5px 5px 15px #161b25, inset -5px -5px 15px #1e2533;",
      },
      "inset.header": {
        default: "inset 5px 5px 15px #d2d5d6, inset -5px -5px 15px #ffffff;",
        _dark: "inset 5px 5px 15px #262f3d, inset -5px -5px 15px #343f53;",
      },
    },
    colors: {
      roundedIn: {
        default: "linear-gradient(165deg, #dee1e3, #ffffff);",
        _dark: "linear-gradient(145deg, #171d28, #1c222f);",
      },
      roundedOut: {
        default: "linear-gradient(165deg, #ffffff, #dee1e3);",
        _dark: "linear-gradient(145deg, #1c222f, #171d28);",
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
          },
          transition: "all 0.2s ease-in-out",
        }),
      },
    },
  },
});

export default theme;
