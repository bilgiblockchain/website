import { Carousel } from "@mantine/carousel";
import { Tutors } from "../../components/tutors";
import { Countdown } from "../../components/countdown";
import { StyledGallery } from "../../components/styledGallery";
import { Grid, Group, Text } from "@mantine/core";
import { InfoGroup } from "../../components/infoGroup";
import { Sponsors } from "../../components/sponsors";

export const Home: React.FC = () => {
  return (
    <>
      <Countdown />
      <Grid align="center" my="lg" justify="center">
        <Grid.Col md={7} span={12}>
          <StyledGallery />
        </Grid.Col>
        <Grid.Col md={5} span={12}>
          <Text>
            Bu yaz sonuında, 28 Ağustos - 10 Eylül tarihleri arasında
            gerçekleşecek Arkhe Blockchain Week ile birlikte İzmir'in en güzel
            köylerinden Şirince'yi, adeta bir Blockchain köyüne dönüştüreceğiz.
            <br />
            <br />
            Birbirinden güzel kamplarımız ile siz de bu sürecin bir parçası
            olabilir, hayatınız boyunca unutamayacağınız bir deneyimi
            yaşayabilirsiniz!
          </Text>
        </Grid.Col>
      </Grid>
      <InfoGroup />
      <Tutors />
      <Sponsors />
      {/* <Carousel
        height={200}
        slideSize="33.333333%"
        slideGap="md"
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
        align="start"
        dragFree
      >
        {Array(36)
          .fill("")
          .map((_, i) => {
            return (
              <Carousel.Slide>
                <div
                  style={{
                    backgroundColor: `hsl(${i * 10}, 37%, 43%)`,
                    height: "100%",
                    textAlign: "center",
                    fontSize: "4rem",
                    lineHeight: "200px",
                    textShadow: "0px 0px 16px #ddd6",
                    color: "white",
                  }}
                >
                  {i}
                </div>
              </Carousel.Slide>
            );
          })}
      </Carousel> */}
    </>
  );
};
