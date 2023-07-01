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
    <>
      <Grid align="center" my="xl" justify="center">
        <Grid.Col span={12}>
          <Text className={classes.span}>Ana Destekçi</Text>
        </Grid.Col>
        <Grid.Col span={12} sm={4}>
          <a href="https://univechain.com/">
            <Image
              src="/images/univechain.png"
              height={120}
              fit="scale-down"
              title="UniveChain"
            />
          </a>
        </Grid.Col>
        <Grid.Col span={12}>
          <Text className={classes.span}>Destekçiler</Text>
        </Grid.Col>
        <Grid.Col span={12} sm={4}>
          <a
            href="https://istanbulblockchainwomen.org/"
            title="Blockchain Women İstanbul"
          >
            <Image
              src="/images/blockchain_women_istanbul.png"
              height={80}
              fit="contain"
            />
          </a>
        </Grid.Col>
        <Grid.Col span={12} sm={4}>
          <a href="https://www.altcointurk.com/" title="altcointurk">
            <Image src="/images/altcointurk.png" height={120} />
          </a>
        </Grid.Col>
        <Grid.Col span={12} sm={4}>
          <a href="https://tim.com.tr/" title="Tim Danışmanlık">
            <Image src="/images/tim_logo_tr.svg" height={120} />
          </a>
        </Grid.Col>
        <Grid.Col span={12}>
          <Text className={classes.span}>Medya Sponsoru</Text>
        </Grid.Col>
        <Grid.Col span={12} sm={3}>
          <a href="https://www.btchaber.com/">
            <Image src="/images/btchaber.png" height={120} fit="scale-down" />
          </a>
        </Grid.Col>
      </Grid>
    </>
  );
};
