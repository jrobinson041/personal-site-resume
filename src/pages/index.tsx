import Head from "next/head";
import {
  Button,
  Divider,
  HStack,
  Icon,
  IconButton,
  SlideFade,
  Text,
  VStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import content from "@/content";
import PageContainer from "@/components/PageContainer";
import Header from "@/components/Header";
import ExperienceSection from "@/components/ExperienceSection";
import Accordion from "@/components/Accordion";
import EducationSection from "@/components/EducationSection";
import { MoonIcon } from "@chakra-ui/icons";
import MoreAboutMe from "@/components/MoreAboutMe";
import { Link } from "@chakra-ui/next-js";
import QuoteText from "@/components/QuoteText";
import { FaGithub, FaLightbulb, FaLinkedin, FaMoon } from "react-icons/fa";

export default function Home() {
  const { toggleColorMode } = useColorMode();
  const ToggleThemeIcon = useColorModeValue(FaMoon, FaLightbulb);

  return (
    <>
      <Head>
        <title>John Robinson | Software Engineer</title>
        <meta
          name="description"
          content="John Robinson | Software Engineer | Front-End engineer specializing in ReactJS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        name={content.name}
        email={content.email}
        imgSrc={content.avatarSrc}
      />

      <PageContainer>
        <Divider />

        <SlideFade
          in
          offsetX="20px"
          offsetY="0px"
          transition={{ enter: { delay: 0.2, duration: 0.5 } }}
        >
          <VStack
            textAlign="left"
            spacing={12}
            px={{ base: 4, md: 16 }}
            py={16}
          >
            <QuoteText fontWeight={100} opacity={0.8} fontSize="xl">
              Hi, I&apos;m{" "}
              <Text as="span" fontWeight={700}>
                John Robinson
              </Text>
              , a software engineer with full stack web app experience,
              especially front end. My specialty is{" "}
              <Text as="span" fontWeight={700}>
                React
              </Text>
              . I&apos;ve worked with complex data streams in connected apps and
              built full 3D experiences from the ground up using ThreeJS,
              including a Virtual Reality experience I&apos;ve demonstrated at a
              Google conference.
            </QuoteText>
            <HStack>
              <Link href={`mailto:${content.email}`}>
                <Button size="lg">Contact Me</Button>
              </Link>
            </HStack>
          </VStack>
        </SlideFade>

        <Accordion
          sections={[
            {
              title: "Experience",
              content: <ExperienceSection content={content.experience} />,
            },
            {
              title: "Education",
              content: <EducationSection content={content.education} />,
            },
            {
              title: "About Me",
              content: <MoreAboutMe {...content.aboutMe} />,
            },
          ]}
        />
      </PageContainer>

      <VStack position="fixed" bottom={2} right={2} zIndex="overlay">
        <IconButton
          aria-label="Toggle color mode"
          icon={<Icon as={ToggleThemeIcon} />}
          onClick={toggleColorMode}
          size="lg"
          borderRadius="full"
        />
        <Link
          href="https://www.linkedin.com/in/john-robinson-9091b613a/"
          isExternal
        >
          <IconButton
            aria-label="LinkedIn"
            icon={<Icon as={FaLinkedin} />}
            size="lg"
            borderRadius="full"
          />
        </Link>
        <Link
          href="https://github.com/jrobinson041/personal-site-resume"
          isExternal
        >
          <IconButton
            aria-label="Github Repo"
            icon={<Icon as={FaGithub} />}
            size="lg"
            borderRadius="full"
          />
        </Link>
      </VStack>
    </>
  );
}
