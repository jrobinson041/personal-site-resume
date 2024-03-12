import { Text, TextProps, useColorModeValue } from "@chakra-ui/react";

export default function QuoteText(props: TextProps) {
  const borderColor = useColorModeValue("blackAlpha.300", "whiteAlpha.300");

  return (
    <Text borderLeftWidth="1px" borderColor={borderColor} p={4} {...props} />
  );
}
