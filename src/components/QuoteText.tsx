import { Text, TextProps, useColorMode } from "@chakra-ui/react";

export default function QuoteText(props: TextProps) {
  const { colorMode } = useColorMode();

  const borderColor =
    colorMode === "light" ? "blackAlpha.300" : "whiteAlpha.300";

  return (
    <Text borderLeftWidth="1px" borderColor={borderColor} p={4} {...props} />
  );
}
