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
      {experience.map((item, idx) => (
        <ExperienceItem
          isFirst={idx === 0}
          isLast={idx === experience.length - 1}
          key={idx}
          {...item}
        />
      ))}
    </VStack>
  );
}
