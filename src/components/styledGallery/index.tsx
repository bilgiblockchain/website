import React from "react";
import {
  Group,
  Stack,
  Image,
  createStyles,
  MediaQuery,
  Box,
  AspectRatio,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  group: {
    width: "max-content",
    overflow: "hidden",
    margin: "auto",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      // scale: "0.8",
      // transform: "scaleX(90%)",
    },
  },
  stack: {},
  image: {
    // maxWidth: 256,
  },
}));

export const StyledGallery: React.FC = () => {
  const theme = useMantineTheme();
  const { classes, cx } = useStyles();
  const smallScreen = useMediaQuery(`(max-width: ${theme.breakpoints.xs}px)`);
  return (
    <Group className={classes.group}>
      <Stack align="flex-end" className={classes.stack}>
        <Image
          src="/images/01.jpeg"
          height={smallScreen ? 90 : 140}
          width={(smallScreen ? 90 : 140) * 1.3357142857142856}
          radius="md"
          withPlaceholder
        />
        <Image
          src="/images/02.jpeg"
          className={classes.image}
          width={smallScreen ? 90 : 140}
          height={(smallScreen ? 90 : 140) / 0.7486631016042781}
          radius="md"
          withPlaceholder
        />
        <Image
          src="/images/03.jpeg"
          className={classes.image}
          height={smallScreen ? 90 : 140}
          width={(smallScreen ? 90 : 140) * 1.3357142857142856}
          radius="md"
          withPlaceholder
        />
      </Stack>
      <Stack className={classes.stack}>
        <Image
          src="/images/04.jpeg"
          className={classes.image}
          height={smallScreen ? 80 : 110}
          width={(smallScreen ? 80 : 110) * 1.6818181818181819}
          radius="md"
          withPlaceholder
        />
        <Image
          src="/images/05.jpeg"
          className={classes.image}
          height={smallScreen ? 80 : 120}
          width={(smallScreen ? 80 : 120) * 1.5416666666666667}
          radius="md"
          withPlaceholder
        />
        <Image
          src="/images/06.jpeg"
          className={classes.image}
          width={smallScreen ? 90 : 140}
          height={(smallScreen ? 90 : 140) / 0.7486631016042781}
          radius="md"
          withPlaceholder
        />
      </Stack>
    </Group>
  );
};
