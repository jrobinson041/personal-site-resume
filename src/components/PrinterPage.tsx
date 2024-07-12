import {
  Avatar,
  Box,
  Divider,
  Flex,
  Heading,
  Icon,
  IconButton,
  ListItem,
  SimpleGrid,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  UnorderedList,
  VStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import content from "@/content";
import { abbreviatedExperience } from "@/content/experience";
import { FaLightbulb, FaMoon } from "react-icons/fa";
import { AddIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";

export default function PrinterPage() {
  const { toggleColorMode } = useColorMode();
  const ToggleThemeIcon = useColorModeValue(FaMoon, FaLightbulb);
  const borderColor = useColorModeValue("gray.300", "gray.600");

  return (
    <div id="printer-page" style={{ padding: "1rem" }}>
      <Flex justify="space-between" align="center" w="full" mb={4}>
        <VStack spacing={0} align="left">
          <Heading
            size="2xl"
            lineHeight="2.7rem"
            id="resume-name"
            opacity={0.8}
          >
            {content.name}
          </Heading>
          <Heading
            size="lg"
            opacity={0.7}
            lineHeight="1.8rem"
            id="resume-occupation"
            color="red.600"
          >
            Software Engineer
          </Heading>
          <Text fontSize="md" opacity={0.6}>
            {content.email} | {content.phone} |{"  "}
            <Link href={content.personalSite.href}>
              {content.personalSite.text}
            </Link>
          </Text>
        </VStack>
        <Avatar name={content.name} src={content.avatarSrc} size="xl" />
      </Flex>

      <Box position="relative">
        <Divider borderColor={borderColor} />
        <Text
          position="absolute"
          fontSize="2rem"
          top={-1}
          left="50%"
          transform="translateX(-50%) translateY(-50%)"
          color={borderColor}
          fontWeight={100}
        >
          {"//"}
        </Text>
      </Box>

      <Heading
        mt={3}
        mb={2}
        opacity={0.7}
        color="red.600"
        fontSize="xl"
        fontWeight={700}
      >
        Experience
      </Heading>

      <VStack spacing={4}>
        {abbreviatedExperience.map((item, idx) => (
          <Box
            key={idx}
            w="full"
            borderRadius="1rem"
            borderWidth="1px"
            borderColor={borderColor}
            boxShadow="inner"
            p={2}
            px={3}
          >
            <Flex justify="space-between" w="full">
              <VStack align="flex-start" spacing={0}>
                <Heading fontSize="lg" fontWeight={100}>
                  {item.title}
                </Heading>
                <Text fontWeight="bold" fontSize="lg" opacity={0.8}>
                  {item.company}{" "}
                  <Text as="span" fontWeight="normal">
                    - {item.location}
                  </Text>
                </Text>
              </VStack>
              <Text fontWeight="bold" fontSize="sm" opacity={0.5}>
                {item.start} - {item.end}
              </Text>
            </Flex>

            <UnorderedList spacing={1} mt={0} mb={1} fontSize="xs">
              {item.notes.map((note, idx) => (
                <ListItem key={idx}>{note}</ListItem>
              ))}
            </UnorderedList>
          </Box>
        ))}
      </VStack>

      <SimpleGrid templateColumns="52% 48%" mt={2}>
        <VStack p={1} spacing={0} align="flext-start">
          <Heading
            pb={1}
            opacity={0.7}
            color="red.600"
            fontSize="xl"
            fontWeight={700}
          >
            Education
          </Heading>
          <Text fontSize="xl" opacity={0.9} fontWeight={400}>
            {content.education.university.name}
          </Text>
          <Text fontSize="lg" opacity={0.9} fontWeight={100}>
            {content.education.abbreviatedDegrees}
          </Text>
          <VStack
            spacing={0}
            mt={2}
            mb={1}
            fontSize="sm"
            fontWeight={100}
            align="flex-start"
          >
            {content.education.printerBullets.map((bullet, idx) => (
              <Text key={idx}>{bullet}</Text>
            ))}
          </VStack>
        </VStack>

        <Box
          p={1}
          pl={6}
          pr={0}
          borderLeftWidth="1px"
          borderColor={borderColor}
        >
          <Heading
            pb={2}
            ml={4}
            opacity={0.7}
            color="red.600"
            fontSize="xl"
            fontWeight={700}
          >
            Skills
          </Heading>

          <Box textAlign="center">
            {content.skills.map((skill, idx) => (
              <Tag
                key={idx}
                size="sm"
                variant="subtle"
                py={1}
                px={2}
                m={1}
                borderRadius="36px"
                transition="all 0.2s ease-in-out"
                _hover={{ transform: "scale(1.05)" }}
              >
                <TagLeftIcon as={AddIcon} mr={2} />
                <TagLabel>{skill}</TagLabel>
              </Tag>
            ))}
          </Box>
        </Box>
      </SimpleGrid>

      <VStack
        position="fixed"
        bottom={2}
        right={2}
        zIndex="overlay"
        className="no-print"
      >
        <IconButton
          aria-label="Toggle color mode"
          icon={<Icon as={ToggleThemeIcon} />}
          onClick={toggleColorMode}
          size="lg"
          borderRadius="full"
        />
      </VStack>
    </div>
  );
}
