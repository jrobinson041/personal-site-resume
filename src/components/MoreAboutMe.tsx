import { Box, Text, VStack } from "@chakra-ui/react";
// import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

interface MoreAboutMeProps {
  content: string[];
  images: {
    src: string;
    caption?: string;
  }[];
}

export default function MoreAboutMe({ content, images }: MoreAboutMeProps) {
  return (
    <VStack textAlign="center" gap={8} py={8}>
      {content.map((item, idx) => (
        <Text
          fontWeight={100}
          opacity={0.8}
          fontSize="2xl"
          key={idx}
          px={{ base: 2, md: 8 }}
        >
          {item}
        </Text>
      ))}
      <Swiper slidesPerView="auto" spaceBetween={10} style={{ width: "100%" }}>
        {images.map(({ src, caption }, idx) => (
          <SwiperSlide key={idx} style={{ maxWidth: "320px" }}>
            <Box>
              <Box borderRadius="xl" overflow="hidden">
                {/* <Image
                  src={src}
                  alt="flying a plane"
                  height={1000}
                  width={1000}
                /> */}
              </Box>
              <Text opacity={0.5} fontSize="sm">
                {caption}
              </Text>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </VStack>
  );
}
