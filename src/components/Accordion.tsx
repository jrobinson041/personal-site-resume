import { ReactNode } from "react";
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Accordion as ChakraAccordion,
  Heading,
} from "@chakra-ui/react";

interface AccordionProps {
  sections: {
    title: string;
    content: ReactNode;
  }[];
}

export default function Accordion({ sections }: AccordionProps) {
  return (
    <ChakraAccordion defaultIndex={0}>
      {sections.map(({ title, content }) => (
        <AccordionItem py={4} key={title}>
          <AccordionButton
            onClick={(e) => {
              const el = e.currentTarget;
              setTimeout(() => {
                window.scrollTo({
                  top: el.offsetTop - 120,
                  behavior: "smooth",
                });
              }, 300);
            }}
          >
            <Heading as="h2" size="2xl" opacity={0.4} flex={1} textAlign="left">
              {title}
            </Heading>
            <AccordionIcon fontSize="2rem" />
          </AccordionButton>
          <AccordionPanel pt={8} px={{ base: 0, md: 4 }}>
            {content}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </ChakraAccordion>
  );
}
