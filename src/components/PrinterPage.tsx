import {
  Box,
  Separator,
  Flex,
  Heading,
  Icon,
  IconButton,
  SimpleGrid,
  Text,
  VStack,
  parseColor,
  HStack,
  List,
} from "@chakra-ui/react";
import {
  ColorPickerArea,
  ColorPickerContent,
  ColorPickerControl,
  ColorPickerEyeDropper,
  ColorPickerInput,
  ColorPickerLabel,
  ColorPickerRoot,
  ColorPickerSliders,
  ColorPickerTrigger,
} from "@/components/ui/color-picker";
import content from "@/content";
import { FaLightbulb, FaMoon, FaPlus } from "react-icons/fa";
import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";
import { useState } from "react";
import { Avatar } from "./ui/avatar";
import { useColorMode, useColorModeValue } from "./ui/color-mode";
import { Tag } from "./ui/tag";

interface PrinterPageProps {
  isBusinessOriented?: boolean;
}

const ACCENT_COLOR = "red.600";
const BUSINESS_ACCENT_COLOR = "blue.600";

export default function PrinterPage({ isBusinessOriented }: PrinterPageProps) {
  const { toggleColorMode } = useColorMode();
  const ToggleThemeIcon = useColorModeValue(FaMoon, FaLightbulb);
  const borderColor = useColorModeValue("gray.300", "gray.600");

  const defaultAccentColor = isBusinessOriented
    ? BUSINESS_ACCENT_COLOR
    : ACCENT_COLOR;

  const [accentColor, setAccentColor] = useState(defaultAccentColor);

  const experience = isBusinessOriented
    ? content.businessExperience
    : content.experience;

  const skills = isBusinessOriented ? content.businessSkills : content.skills;

  return (
    <div id="printer-page" style={{ padding: "1rem", paddingTop: "1.5rem" }}>
      <Flex justify="space-between" align="center" w="full" mb={4}>
        <VStack gap={0} align="left">
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
            id="resume-occupation"
            color={accentColor}
          >
            {isBusinessOriented ? (
              <span>
                Software Engineer{"  "}
                <Heading size="lg" as="span" fontWeight={100}>
                  |
                </Heading>
                {"  "}
                Technology Strategist
              </span>
            ) : (
              "Software Engineer"
            )}
          </Heading>
          <Text fontSize="md" opacity={0.6}>
            {content.email}
            {"  "}|{"  "}
            {content.phone}
            {"  "}|{"   "}
            <ChakraLink asChild>
              <NextLink href={content.personalSite.href}>
                {content.personalSite.text}
              </NextLink>
            </ChakraLink>
          </Text>
        </VStack>
        <Avatar name={content.name} src={content.avatarSrc} size="xl" />
      </Flex>

      <Box position="relative">
        <Separator borderColor={borderColor} />
        <Text
          position="absolute"
          fontSize="2rem"
          top={-1}
          left="50%"
          transform="translateX(-50%) translateY(-51%) scaleX(80%) scaleY(120%)"
          color={borderColor}
          fontWeight={100}
          letterSpacing={1}
        >
          {"</>"}
        </Text>
      </Box>

      <Heading
        mt={2}
        mb={2}
        opacity={0.7}
        color={accentColor}
        fontSize="xl"
        fontWeight={700}
      >
        Experience
      </Heading>

      <VStack gap={4}>
        {experience.map((item, idx) => (
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
              <VStack align="flex-start" gap={0}>
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

            <List.Root gap={1} mt={0} mb={1} fontSize="xs">
              {item.notes.map((note, idx) => (
                <List.Item key={idx}>{note}</List.Item>
              ))}
            </List.Root>
          </Box>
        ))}
      </VStack>

      <SimpleGrid templateColumns="52% 48%" mt={2}>
        <VStack p={1} gap={0} align="flext-start">
          <Heading
            pb={1}
            opacity={0.7}
            color={accentColor}
            fontSize="xl"
            fontWeight={700}
          >
            Education
          </Heading>
          <Text fontSize="xl" opacity={0.9} fontWeight={400}>
            {content.education.abbreviatedDegrees}
          </Text>
          <Text fontSize="lg" opacity={0.9} fontWeight={100}>
            {content.education.university.name}
          </Text>
          <VStack
            gap={0}
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
            color={accentColor}
            fontSize="xl"
            fontWeight={700}
          >
            Skills
          </Heading>

          <Box textAlign="center">
            {skills.map((skill, idx) => (
              <Tag
                key={idx}
                size="sm"
                variant="subtle"
                py={1}
                px={2}
                mt={0}
                mb={2}
                mx={1}
                borderRadius="36px"
                transition="all 0.2s ease-in-out"
                _hover={{ transform: "scale(1.05)" }}
                startElement={<Icon as={FaPlus} />}
              >
                {skill}
              </Tag>
            ))}
          </Box>
        </Box>
      </SimpleGrid>

      {/* <VStack
        position="fixed"
        bottom={2}
        right={2}
        zIndex="overlay"
        className="no-print"
      >
        <IconButton
          aria-label="Toggle color mode"
          onClick={toggleColorMode}
          size="lg"
          borderRadius="full"
        >
          <Icon as={ToggleThemeIcon} />
        </IconButton>
        <ColorPickerRoot defaultValue={parseColor("#eb5e41")} maxW="200px">
          <ColorPickerLabel>Color</ColorPickerLabel>
          <ColorPickerControl>
            <ColorPickerInput />
            <ColorPickerTrigger />
          </ColorPickerControl>
          <ColorPickerContent>
            <ColorPickerArea />
            <HStack>
              <ColorPickerEyeDropper />
              <ColorPickerSliders />
            </HStack>
          </ColorPickerContent>
        </ColorPickerRoot>
      </VStack> */}
    </div>
  );
}
