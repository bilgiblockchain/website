import { Box, Group, Text, createStyles, useMantineTheme } from "@mantine/core";
import React from "react";
import ReactCountdown, { CountdownRendererFn } from "react-countdown";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    height: 100,
  },
  container: {
    backgroundColor: theme.fn.primaryColor(),
    position: "absolute",
    left: -60,
    right: -60,
    width: "inherit",
    height: "100%",
  },
  text: {
    fontSize: theme.fontSizes.xl * 2,
    color: "white",
    textAlign: "center",
  },
  span: {
    display: "block",
    fontSize: theme.fontSizes.md,
    textTransform: "capitalize",
  },
}));

export const Countdown: React.FC = () => {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const renderer: CountdownRendererFn = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }) => {
    return (
      <Box my="lg" className={classes.wrapper}>
        <Box className={classes.container}>
          {completed ? (
            <></>
          ) : (
            <Group
              position="center"
              spacing={theme.spacing.xl * 2}
              grow
              px="12vw"
            >
              <Text className={classes.text}>
                {days}
                <span className={classes.span}>Gün</span>
              </Text>
              <Text className={classes.text}>
                {hours}
                <span className={classes.span}>Saat</span>
              </Text>
              <Text className={classes.text}>
                {minutes}
                <span className={classes.span}>Dakika</span>
              </Text>
              <Text className={classes.text}>
                {seconds}
                <span className={classes.span}>Saniye</span>
              </Text>
            </Group>
          )}
        </Box>
      </Box>
    );
  };
  return (
    <ReactCountdown date={new Date("August 28, 2023")} renderer={renderer} />
  );
};
