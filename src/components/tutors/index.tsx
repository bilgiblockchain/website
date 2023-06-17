import { Box, SimpleGrid, Title } from "@mantine/core";
import React from "react";
import { TutorCard } from "./tutorCard";
import { tutorsData } from "./data";

// const trToAscii = (name: string) =>
//   [...name]
//     .map((letter) => {
//       switch (letter) {
//         case "ş":
//           return "s";
//         case "ğ":
//           return "g";
//         case "ü":
//           return "u";
//         case "ö":
//           return "o";
//         case "ç":
//           return "c";
//         case "ı":
//           return "i";
//         case "İ":
//           return "I";
//         case "Ş":
//           return "S";
//         case "Ğ":
//           return "G";
//         case "Ü":
//           return "U";
//         case "Ö":
//           return "O";
//         case "Ç":
//           return "C";
//         case " ":
//           return "_";
//         default:
//           return letter;
//       }
//     })
//     .join("");

export const Tutors: React.FC = () => {
  // console.log(
  //   tutorsData.map((data) => ({
  //     ...data,
  //     image: `/images/tutors/${trToAscii(data.name)}.png`,
  //   }))
  // );
  return (
    <Box my="xl">
      <Title order={1}>Eğitmenler</Title>
      <SimpleGrid
        cols={4}
        spacing="lg"
        breakpoints={[
          { maxWidth: 980, cols: 3, spacing: "md" },
          { maxWidth: 755, cols: 2, spacing: "sm" },
          { maxWidth: 600, cols: 1, spacing: "sm" },
        ]}
        my="xl"
      >
        {tutorsData.map((props) => (
          <TutorCard {...props} key={props.name} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
