import {
  Divider,
  Group,
  Text,
  createStyles,
  useMantineTheme,
} from "@mantine/core";
import React from "react";

const useStyles = createStyles((theme) => ({
  text: {
    fontSize: theme.fontSizes.xl * 3,
    color: theme.colors.dark[4],
    textAlign: "center",
  },
  span: {
    display: "block",
    fontSize: theme.fontSizes.md,
    textTransform: "capitalize",
  },
}));

export const InfoGroup: React.FC = () => {
  const theme = useMantineTheme();
  const { classes, cx } = useStyles();
  return (
    <Group position="center" spacing={theme.spacing.xl * 4} my="xl">
      <Text className={classes.text}>
        400
        <span className={classes.span}>Öğrenci</span>
      </Text>
      <Divider my="md" orientation="vertical" />
      <Text className={classes.text}>
        25
        <span className={classes.span}>Eğitmen</span>
      </Text>
      <Divider my="md" orientation="vertical" />
      <Text className={classes.text}>
        +40
        <span className={classes.span}>Etkinlik</span>
      </Text>
    </Group>
  );
};
