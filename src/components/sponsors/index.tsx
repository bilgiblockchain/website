import {
  Divider,
  Group,
  Text,
  Image,
  createStyles,
  useMantineTheme,
  Box,
  Grid,
} from "@mantine/core";
import React from "react";

const useStyles = createStyles((theme) => ({
  span: {
    color: theme.colors.dark[4],
    textAlign: "center",
    display: "block",
    fontSize: theme.fontSizes.lg,
    textTransform: "capitalize",
    marginBottom: theme.spacing.sm,
    fontWeight: "bold",
  },
}));

export const Sponsors: React.FC = () => {
  const theme = useMantineTheme();
  const { classes, cx } = useStyles();
  return (
    <Grid align="center" my="xl" justify="center">
      <Grid.Col span={6}>
        <Text className={classes.span}>Ana Destekçi</Text>
        <Image
          src="/images/univechain.jpeg"
          height={120}
          fit="contain"
          sx={{ backgroundColor: "#f7f7f7" }}
        />
      </Grid.Col>
      <Grid.Col span={6}>
        <Text className={classes.span}>Medya Sponsoru</Text>
        <Image src="/images/btchaber.jpeg" height={120} />
      </Grid.Col>
    </Grid>
  );
};
