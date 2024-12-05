import React, { SetStateAction, useState } from "react";
import {
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Center,
  SimpleGrid,
  Input,
} from "@chakra-ui/react";

interface ColorPickerProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function ColorPicker({ value, setValue }: ColorPickerProps) {
  const colors = [
    "gray.500",
    "red.600",
    "gray.700",
    "green.600",
    "blue.600",
    "blue.800",
    "yellow.600",
    "orange.600",
    "purple.600",
    "pink.600",
  ];

  return (
    <Popover variant="picker">
      <PopoverTrigger>
        <Button
          aria-label={value}
          background={value}
          height="22px"
          width="22px"
          padding={0}
          minWidth="unset"
          borderRadius={3}
        ></Button>
      </PopoverTrigger>
      <PopoverContent width="170px">
        <PopoverArrow bg={value} />
        <PopoverCloseButton color="white" />
        <PopoverHeader
          height="100px"
          backgroundColor={value}
          borderTopLeftRadius={5}
          borderTopRightRadius={5}
          color="white"
        >
          <Center height="100%">{value}</Center>
        </PopoverHeader>
        <PopoverBody height="120px">
          <SimpleGrid columns={5} spacing={2}>
            {colors.map((c) => (
              <Button
                key={c}
                aria-label={c}
                background={c}
                height="22px"
                width="22px"
                padding={0}
                minWidth="unset"
                borderRadius={3}
                _hover={{ background: c }}
                onClick={() => {
                  setValue(c);
                }}
              ></Button>
            ))}
          </SimpleGrid>
          <Input
            borderRadius={3}
            marginTop={3}
            placeholder="red.100"
            size="sm"
            value={value}
            onChange={(e: any) => {
              setValue(e.target.value);
            }}
          />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
