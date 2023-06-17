import {
  AspectRatio,
  Card,
  Group,
  Text,
  Image,
  Badge,
  Stack,
} from "@mantine/core";
import React from "react";

export type TutorCardProps = {
  image: string;
  name: string;
  span?: string;
};

export const TutorCard: React.FC<TutorCardProps> = ({ image, name, span }) => {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <AspectRatio ratio={1}>
          <Image
            src={image}
            alt={name}
            sx={{ figure: { width: "100%" } }}
            withPlaceholder
          />
        </AspectRatio>
      </Card.Section>

      <Stack mt="md" mb="xs">
        <Text weight={500}>{name}</Text>
        <Text c="dimmed" fz="sm">
          {span}
        </Text>
      </Stack>
    </Card>
  );
};
