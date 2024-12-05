import { Box, BoxProps } from "@chakra-ui/react";
import { useColorModeValue } from "./ui/color-mode";

export default function Card(props: BoxProps) {
  const borderColor = useColorModeValue("blackAlpha.300", "whiteAlpha.300");

  return (
    <Box
      borderWidth="1px"
      borderRadius="3xl"
      borderColor={borderColor}
      boxShadow="inner"
      w="full"
      h="full"
      opacity={0}
      transform="translateX(30px)"
      // whileInView={{
      //   opacity: 1,
      //   transform: "translateY(0px)",
      // }}
      // viewport={{ amount: 0.3, once: true }}
      {...props}
    />
  );
}
