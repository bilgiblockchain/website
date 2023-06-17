import React from "react";
import { Group, Stack, Image, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  group: {
    width: "max-content",
    margin: "auto",
  },
  stack: {},
  image: {
    // maxWidth: 256,
  },
}));

export const StyledGallery: React.FC = () => {
  const { classes, cx } = useStyles();
  return (
    <Group className={classes.group}>
      <Stack align="flex-end" className={classes.stack}>
        <Image
          src="/images/01.jpeg"
          className={classes.image}
          height={140}
          radius="md"
          withPlaceholder
        />
        <Image
          src="/images/02.jpeg"
          className={classes.image}
          width={140}
          radius="md"
          withPlaceholder
        />
        <Image
          src="/images/03.jpeg"
          className={classes.image}
          height={140}
          radius="md"
          withPlaceholder
        />
      </Stack>
      <Stack className={classes.stack}>
        <Image
          src="/images/04.jpeg"
          className={classes.image}
          height={110}
          radius="md"
          withPlaceholder
        />
        <Image
          src="/images/05.jpeg"
          className={classes.image}
          height={140}
          radius="md"
          withPlaceholder
        />
        <Image
          src="/images/06.jpeg"
          className={classes.image}
          width={160}
          radius="md"
          withPlaceholder
        />
      </Stack>
    </Group>
  );
};
