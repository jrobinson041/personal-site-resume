import { TExperienceItem } from "@/content/experience";
import { AddIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Flex,
  HStack,
  Heading,
  ListItem,
  Show,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  Text,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "./Card";

interface ExperienceItemProps extends TExperienceItem {
  isFirst?: boolean;
  isLast?: boolean;
}

export default function ExperienceItem({
  title,
  company,
  location,
  start,
  end,
  notes,
  demos,
  isFirst,
  isLast,
}: ExperienceItemProps) {
  const mapColor = useColorModeValue("gray.200", "gray.600");
  const getMapLineTop = () => {
    if (isFirst) return "50%";
    if (isLast) return;
    return "0%";
  };

  const getMapLineBottom = () => {
    if (isLast) return "50%";
    return;
  };

  return (
    <Box w="100%" ml={{ base: 0, md: 8 }} position="relative">
      <Card
        p={{ base: 4, md: 8 }}
        overflow="visible"
        boxShadow="inset.sm"
        bg="roundedOut"
        borderWidth={0}
      >
        <Flex justify="space-between" align="center" mb={1}>
          <Heading size="lg" fontWeight={100}>
            {title}
          </Heading>
          <Show above="sm">
            <Heading size="sm" opacity={0.5}>
              {start} — {end}
            </Heading>
          </Show>
        </Flex>
        <Heading fontSize="1.5rem" opacity={0.8}>
          {company} - {location}
        </Heading>
        <Show below="md">
          <Heading size="sm" opacity={0.5}>
            {start} — {end}
          </Heading>
        </Show>
        <UnorderedList spacing={4} mt={6} mb={1}>
          {notes.map((note, idx) => (
            <ListItem key={idx}>{note}</ListItem>
          ))}
        </UnorderedList>
        {demos && (
          <>
            <Text mt={6} fontWeight={700} fontSize="sm">
              Check it out:
            </Text>
            <HStack mt={2}>
              {demos.map((demo, idx) => (
                <Link href={demo.url} key={idx} isExternal>
                  <Tag
                    size="lg"
                    variant="subtle"
                    p={4}
                    borderRadius="36px"
                    transition="all 0.2s ease-in-out"
                    _hover={{ transform: "scale(1.05)" }}
                  >
                    <TagLeftIcon as={AddIcon} mr={2} />
                    <TagLabel>{demo.title}</TagLabel>
                    <TagRightIcon as={ExternalLinkIcon} ml={1} />
                  </Tag>
                </Link>
              ))}
            </HStack>
          </>
        )}
      </Card>
      <Box
        bg={mapColor}
        w="15px"
        h="15px"
        borderRadius="full"
        position="absolute"
        top="50%"
        left="-30px"
        transform="translateY(-50%)"
      />
      <Box
        bg={mapColor}
        w="5px"
        h="120%"
        borderRadius="full"
        position="absolute"
        top={getMapLineTop()}
        bottom={getMapLineBottom()}
        left="-25px"
      />
    </Box>
  );
}
