import { Tutors } from "../../components/tutors";
import { Countdown } from "../../components/countdown";
import { StyledGallery } from "../../components/styledGallery";
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
import { InfoGroup } from "../../components/infoGroup";
import { Sponsors } from "../../components/sponsors";
import { Carousel } from "@mantine/carousel";
import { IconArrowNarrowRight } from "@tabler/icons";
import { Camps } from "../../components/camps";

export const ArkhePage: React.FC = () => {
  return (
    <>
      <Title order={1} my="xl" c="brand" align="center" size="3em">
        Arkhe Blockchain Week 2023
      </Title>
      <Countdown />
      <Grid align="center" my="lg" justify="center">
        <Grid.Col md={7} span={12}>
          <StyledGallery />
        </Grid.Col>
        <Grid.Col md={5} span={12}>
          <Text ta="center">
            Bu yaz sonunda, 28 Ağustos - 10 Eylül tarihleri arasında
            gerçekleşecek Arkhe Blockchain Week ile birlikte İzmir'in en güzel
            köylerinden Şirince'yi, adeta bir Blockchain köyüne dönüştüreceğiz.
            <br />
            <br />
            Birbirinden güzel kamplarımız ile siz de bu sürecin bir parçası
            olabilir, hayatınız boyunca unutamayacağınız bir deneyimi
            yaşayabilirsiniz!
            <Box mx="auto" w="max-content" my="xl">
              <a
                href="https://archeprojesi.com/gelecek-programlar?sub_course=arkheblockchainweeks"
                target="_blank"
              >
                <Button color="brand" size="xl" my="xl">
                  BAŞVUR
                </Button>
              </a>
            </Box>
          </Text>
        </Grid.Col>
      </Grid>
      <InfoGroup />
      <Tutors />
      <Camps />
      <Sponsors />
      <Text ta="center" c="dark.4">
        Kurumsal iş birlikleri için{" "}
        <Text fw={700} c="brand" span>
          bilgiblockchain@hotmail.com
        </Text>{" "}
        mail adresinden bizimle iletişime geçebilirsiniz.
      </Text>
    </>
  );
};
