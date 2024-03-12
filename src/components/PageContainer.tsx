import { Box, BoxProps } from "@chakra-ui/react";

export default function PageContainer(props: BoxProps) {
  return <Box p={4} w="100%" maxW="850px" margin="auto" {...props} />;
}
