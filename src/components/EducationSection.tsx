import { Box, HStack, Heading, Icon, Text, VStack } from "@chakra-ui/react";
import Card from "./Card";
import { TEducationContent } from "@/content/education";
import { FaCheck } from "react-icons/fa";
import { Tag } from "./ui/tag";

interface EducationSectionProps {
  content: TEducationContent;
}

export default function EducationSection({ content }: EducationSectionProps) {
  return (
    <VStack my={12} textAlign="center">
      <Heading as="h3" size="lg">
        {content.university.name}
      </Heading>
      <Heading as="h4" fontSize="1.5rem" opacity={0.5} mb={6}>
        Graduated {content.university.graduated}
      </Heading>

      <HStack gap={2} w="full" mb={8}>
        {content.degrees.map((degree) => (
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
            key={degree.area}
          >
            <Text fontSize="0.9rem" fontWeight={100} opacity={0.5} mb={-2}>
              {degree.type}
            </Text>
            <Text fontSize="1.75rem" fontWeight={600} opacity={0.8}>
              {degree.area}
            </Text>
            <Text
              hideBelow="md"
              fontSize="0.9rem"
              fontWeight={100}
              opacity={0.5}
            >
              {degree.gpa} GPA
            </Text>
          </Card>
        ))}
      </HStack>

      <Box textAlign="center">
        {content.tags.map((tag) => (
          <Tag
            size="lg"
            variant="subtle"
            p={4}
            borderRadius="36px"
            transition="all 0.2s ease-in-out"
            key={tag}
            m={2}
            startElement={<Icon as={FaCheck} />}
          >
            {tag}
          </Tag>
        ))}
      </Box>
    </VStack>
  );
}
