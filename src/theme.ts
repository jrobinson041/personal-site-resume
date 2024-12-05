import { createSystem, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    "html, body": {
      bg: { base: "gray.50", _dark: "gray.800" },
    },
  },
});

const system = createSystem(config);

export default system;

/*
const system = createSystem(config, {
  theme: {
    // config,
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
            bg:
              props.colorMode === "light" ? "blackAlpha.100" : "whiteAlpha.200",
            backdropFilter: "blur(4px)",
            _hover: {
              bg:
                props.colorMode === "light"
                  ? "blackAlpha.200"
                  : "whiteAlpha.300",
            },
          }),
        },
      },
    },
  },
});

export default theme;
*/
