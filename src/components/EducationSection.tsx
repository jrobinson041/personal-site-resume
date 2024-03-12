import { AddIcon, CheckIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  Heading,
  Show,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  VStack,
} from "@chakra-ui/react";
import Card from "./Card";

export default function EducationSection() {
  const tags = [
    "Overall GPA 3.76",
    "Magna Cum Laude",
    "Dean's List",
    "Physics Club President",
    "Sigma Pi Sigma Honor Society",
  ];
  return (
    <VStack my={12} textAlign="center">
      <Heading as="h3" size="lg">
        State University of New York at Geneseo
      </Heading>
      <Heading as="h4" fontSize="1.5rem" opacity={0.5} mb={6}>
        Graduated May 2018
      </Heading>

      <HStack spacing={2} w="full" mb={8}>
        <Card
          borderRadius="16px"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
          p={{ base: 4, md: 6 }}
          pt={{ base: 4, md: 8 }}
        >
          <Text fontSize="0.9rem" fontWeight={100} opacity={0.5} mb={-2}>
            Bachelor of Arts
          </Text>
          <Text fontSize="1.75rem" fontWeight={600} opacity={0.8}>
            Physics
          </Text>
          <Show above="sm">
            <Text fontSize="0.9rem" fontWeight={100} opacity={0.5}>
              3.73 GPA
            </Text>
          </Show>
        </Card>
        <Card
          borderRadius="16px"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
          p={{ base: 4, md: 6 }}
          pt={{ base: 4, md: 8 }}
        >
          <Text fontSize="0.9rem" fontWeight={100} opacity={0.5} mb={-2}>
            Bachelor of Arts
          </Text>
          <Text fontSize="1.75rem" fontWeight={600} opacity={0.8}>
            Mathematics
          </Text>
          <Show above="sm">
            <Text fontSize="0.9rem" fontWeight={100} opacity={0.5}>
              3.97 GPA
            </Text>
          </Show>
        </Card>
      </HStack>
      <Box textAlign="center">
        {tags.map((tag) => (
          <Tag
            size="lg"
            variant="subtle"
            p={4}
            borderRadius="36px"
            transition="all 0.2s ease-in-out"
            key={tag}
            m={2}
          >
            <TagLeftIcon as={CheckIcon} mr={2} />
            <TagLabel>{tag}</TagLabel>
          </Tag>
        ))}
      </Box>
    </VStack>
  );
}
