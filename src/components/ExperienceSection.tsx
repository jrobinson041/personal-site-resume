import { Box, Heading, VStack } from "@chakra-ui/react";
import ExperienceItem from "./ExperienceItem";
import { TExperienceItem } from "@/content/experience";
import { Swiper, SwiperSlide } from "swiper/react";

interface ExperienceSectionProps {
  experience: TExperienceItem[];
}

export default function ExperienceSection({
  experience,
}: ExperienceSectionProps) {
  return (
    <VStack spacing={12}>
      {experience.map((experience, idx) => (
        <ExperienceItem key={idx} {...experience} />
      ))}
    </VStack>
  );
}
