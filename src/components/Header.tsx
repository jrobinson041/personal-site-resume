import { Link } from "@chakra-ui/next-js";
import {
  Avatar,
  Box,
  Heading,
  SlideFade,
  VStack,
  chakra,
  shouldForwardProp,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  isValidMotionProp,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

interface HeaderProps {
  name: string;
  email: string;
  imgSrc: string;
}

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const bgGradient =
  "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9332983193277311) 54%, rgba(0,0,0,0.8940826330532213) 62%, rgba(0,0,0,0.7792366946778712) 74%, rgba(0,0,0,0.5663515406162465) 86%, rgba(0,0,0,0) 100%)";

export default function Header({ name, email, imgSrc }: HeaderProps) {
  const { scrollY } = useScroll();
  const bgColor = useColorModeValue("gray.50", "gray.700");

  const appearOpacity = useTransform(scrollY, [0, 200], [0, 1]);
  const appearOpacitySpring = useSpring(appearOpacity, {
    stiffness: 500,
    damping: 100,
  });

  const slideDown = useTransform(scrollY, [0, 200], [-120, 0]);
  const slideDownSpring = useSpring(slideDown, {
    stiffness: 500,
    damping: 100,
  });

  const maxWidth = useTransform(scrollY, [0, 200], [950, 1400]);
  const maxWidthSpring = useSpring(maxWidth, { stiffness: 500, damping: 100 });

  const paddingTop = useTransform(scrollY, [0, 200], [36, 0]);
  const paddingTopSpring = useSpring(paddingTop, {
    stiffness: 500,
    damping: 100,
  });

  const scale = useTransform(scrollY, [0, 200], [1, 0.6]);
  const scaleSpring = useSpring(scale, {
    stiffness: 500,
    damping: 100,
  });

  const transformLeft = useTransform(scrollY, [0, 200], [0, -50]);
  const transformLeftSpring = useSpring(transformLeft, {
    stiffness: 500,
    damping: 100,
  });

  const transformRight = useTransform(scrollY, [0, 200], [0, 25]);
  const transformRightSpring = useSpring(transformRight, {
    stiffness: 500,
    damping: 100,
  });

  const transformUp = useTransform(scrollY, [0, 200], [0, -10]);
  const transformUpSpring = useSpring(transformUp, {
    stiffness: 500,
    damping: 100,
  });

  const transformAvatarUp = useTransform(scrollY, [0, 200], [0, -2]);
  const transformAvatarUpSpring = useSpring(transformAvatarUp, {
    stiffness: 500,
    damping: 100,
  });

  const disappearOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const disappearOpacitySpring = useSpring(disappearOpacity, {
    stiffness: 500,
    damping: 100,
  });

  return (
    <>
      <ChakraBox
        w="100vw"
        h={{ base: "80px", md: "100px" }}
        // bg={bgGradient}
        bg={bgColor}
        position="fixed"
        top={0}
        zIndex="sticky"
        boxShadow="md"
        style={{
          translateY: slideDownSpring,
          opacity: appearOpacitySpring,
          //   WebkitMask: "linear-gradient(0deg, transparent, black 30%)",
          //   backdropFilter: "blur(10px)",
        }}
      />
      <ChakraBox
        display="flex"
        flexDir="row"
        alignItems="center"
        pb={8}
        px={4}
        w="100%"
        margin="auto"
        position="sticky"
        top={0}
        style={{
          maxWidth: maxWidthSpring,
          paddingTop: paddingTopSpring,
          translateY: transformUpSpring,
        }}
        zIndex="sticky"
      >
        <ChakraBox
          style={{
            scale: scaleSpring,
            translateX: transformLeftSpring,
          }}
        >
          <SlideFade
            in
            offsetX="20px"
            offsetY="0px"
            transition={{ enter: { delay: 0.2, duration: 0.5 } }}
          >
            <VStack spacing={0} align="left">
              <Heading size={{ base: "xl", md: "2xl" }} pt={2} as="h1">
                {name}
              </Heading>
              <Heading as="h2" size="lg" opacity={0.4}>
                Software Engineer
              </Heading>
              <ChakraBox style={{ opacity: disappearOpacitySpring }}>
                <Link href={`mailto:${email}`} fontSize="xl" opacity={0.6}>
                  {email}
                </Link>
              </ChakraBox>
            </VStack>
          </SlideFade>
        </ChakraBox>
        <Box flex={1} />
        <ChakraBox
          style={{
            scale: scaleSpring,
            translateX: transformRightSpring,
            translateY: transformAvatarUpSpring,
          }}
        >
          <SlideFade
            in
            offsetX="20px"
            offsetY="0px"
            transition={{ enter: { delay: 0.2, duration: 0.5 } }}
          >
            <Avatar
              name={name}
              src={imgSrc}
              size={{ base: "xl", md: "2xl" }}
              // boxShadow="inset.sm"
            />
          </SlideFade>
        </ChakraBox>
      </ChakraBox>
    </>
  );
}
