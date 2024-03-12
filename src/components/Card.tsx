import { Box, BoxProps, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Card(props: BoxProps) {
  const { colorMode } = useColorMode();

  const borderColor =
    colorMode === "light" ? "blackAlpha.300" : "whiteAlpha.300";

  return (
    <Box
      as={motion.div}
      borderWidth="1px"
      borderRadius="3xl"
      borderColor={borderColor}
      boxShadow="inner"
      w="full"
      h="full"
      opacity={0}
      transform="translateX(30px)"
      initial={{ opacity: 0, transform: "translateX(30px)" }}
      whileInView={{
        opacity: 1,
        transform: "translateY(0px)",
      }}
      viewport={{ amount: 0.3, once: true }}
      {...props}
    />
  );
}
