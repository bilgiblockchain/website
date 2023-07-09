import React from "react";
import {
  Box,
  Button,
  Grid,
  Group,
  Text,
  Title,
  Image,
  AspectRatio,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";

export const Camps: React.FC = () => {
  return (
    <>
      <Title order={1} align="center">
        1. Hafta
      </Title>
      <br />
      <Carousel
        slideSize="100%"
        slideGap="md"
        align="start"
        withIndicators
        styles={{
          control: {
            "&[data-inactive]": {
              opacity: 0,
              cursor: "default",
            },
          },
        }}
      >
        {Array(6)
          .fill(null)
          .map((_, i) => ({ image: `/images/classes/hafta1${i + 1}.jpeg` }))
          .map(({ image }) => {
            return (
              <Carousel.Slide>
                <AspectRatio ratio={1.8}>
                  <Image src={image} fit="contain" />
                </AspectRatio>
              </Carousel.Slide>
            );
          })}
      </Carousel>
      <br />
      <Title order={1} align="center">
        2. Hafta
      </Title>
      <br />
      <Carousel
        slideSize="100%"
        slideGap="md"
        align="start"
        withIndicators
        styles={{
          control: {
            "&[data-inactive]": {
              opacity: 0,
              cursor: "default",
            },
          },
        }}
      >
        {Array(6)
          .fill(null)
          .map((_, i) => ({ image: `/images/classes/hafta2${i + 1}.jpeg` }))
          .map(({ image }) => {
            return (
              <Carousel.Slide>
                <AspectRatio ratio={1.8}>
                  <Image src={image} fit="contain" />
                </AspectRatio>
              </Carousel.Slide>
            );
          })}
      </Carousel>
    </>
  );
};
