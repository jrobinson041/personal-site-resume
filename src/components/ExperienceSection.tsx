import { Box, Heading, VStack } from "@chakra-ui/react";
import ExperienceItem from "./ExperienceItem";
import { TExperienceItem } from "@/content/experience";

interface ExperienceSectionProps {
  content: TExperienceItem[];
}

export default function ExperienceSection({ content }: ExperienceSectionProps) {
  return (
    <VStack spacing={12}>
      {content.map((item, idx) => (
        <ExperienceItem
          isFirst={idx === 0}
          isLast={idx === content.length - 1}
          key={idx}
          {...item}
        />
      ))}
    </VStack>
  );
}
