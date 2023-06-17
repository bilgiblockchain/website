import { Divider, Grid, Text, createStyles } from "@mantine/core";
import React from "react";

const useStyles = createStyles((theme) => ({
  text: {
    fontSize: "min(8vw, 4em)",
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
  const { classes } = useStyles();
  return (
    <Grid my="xl" mx="auto" grow>
      <Grid.Col span={3}>
        <Text className={classes.text}>
          400
          <span className={classes.span}>Öğrenci</span>
        </Text>
      </Grid.Col>
      <Divider my="xl" orientation="vertical" />
      <Grid.Col span={3}>
        <Text className={classes.text}>
          25
          <span className={classes.span}>Eğitmen</span>
        </Text>
      </Grid.Col>
      <Divider my="xl" orientation="vertical" />
      <Grid.Col span={3}>
        <Text className={classes.text}>
          +40
          <span className={classes.span}>Etkinlik</span>
        </Text>
      </Grid.Col>
    </Grid>
  );
};
