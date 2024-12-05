import { ReactNode } from "react";
import { Heading } from "@chakra-ui/react";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion";

interface AccordionProps {
  sections: {
    title: string;
    content: ReactNode;
  }[];
}

export default function Accordion({ sections }: AccordionProps) {
  return (
    <AccordionRoot defaultValue={[sections[0].title]}>
      {sections.map(({ title, content }) => (
        <AccordionItem py={4} key={title} value={title}>
          <AccordionItemTrigger
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
          </AccordionItemTrigger>
          <AccordionItemContent pt={8} px={{ base: 0, md: 4 }}>
            {content}
          </AccordionItemContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  );
}
