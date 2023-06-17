import {
  Badge,
  Card,
  Group,
  Text,
  Image,
  SimpleGrid,
  AspectRatio,
  Button,
  Title,
  Stack,
  Box,
} from "@mantine/core";
import { teamData } from "./data";

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

export const TeamPage = () => {
  // console.log(
  //   teamData.map((data) => ({
  //     ...data,
  //     items: data.items.map((data) => ({
  //       ...data,
  //       image: `/images/team/${trToAscii(data.name)}.png`,
  //     })),
  //   }))
  // );
  return (
    <>
      {teamData.map(({ title, items }) => (
        <Box my="xl" key={title}>
          <Title order={1} my="lg">
            {title}
          </Title>
          <SimpleGrid
            cols={4}
            spacing="lg"
            breakpoints={[
              { maxWidth: 980, cols: 3, spacing: "md" },
              { maxWidth: 755, cols: 2, spacing: "sm" },
              { maxWidth: 600, cols: 1, spacing: "sm" },
            ]}
          >
            {items.map(({ name, span, link, image }) => (
              <Card
                shadow="sm"
                p="lg"
                pb="sm"
                radius="md"
                withBorder
                key={name}
              >
                <Card.Section>
                  <AspectRatio ratio={1}>
                    <Image
                      src={image}
                      alt={name}
                      sx={{ figure: { width: "100%" } }}
                    />
                  </AspectRatio>
                </Card.Section>

                <Stack align="start" mt="md" mb="xs">
                  <Text weight={500}>{name}</Text>
                  <Text c="dimmed" fz="sm">
                    {span}
                  </Text>
                  <a href={link} target="_blank">
                    <Button variant="subtle" color="primary" compact>
                      LinkedIn
                    </Button>
                  </a>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>
        </Box>
      ))}
    </>
  );
};
