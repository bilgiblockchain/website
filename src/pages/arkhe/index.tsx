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
  Kbd,
  Center,
  Stack,
} from "@mantine/core";
import { InfoGroup } from "../../components/infoGroup";
import { Sponsors } from "../../components/sponsors";
import { Carousel } from "@mantine/carousel";
import { IconArrowNarrowRight, IconCheck, IconCopy } from "@tabler/icons";
import { Camps } from "../../components/camps";
import { useClipboard } from "@mantine/hooks";

export const ArkhePage: React.FC = () => {
  const clipboard = useClipboard({ timeout: 1000 });
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
      <Title order={1}>Burs Fonu</Title>
      <Text mt={16} fz="sm">
        Arkhe Blockchain Week'e gelmek isteyen ancak türlü imkansızlıklardan
        dolayı bu şansa erişemeyen birçok parlak genç için, Arkhe Blockchain
        Week özelinde bir{" "}
        <Text c="brand" fw={700} display={"inline"}>
          burs fonu
        </Text>{" "}
        oluşturuyoruz. Şeffaflık adına burs veren kişi ve kurumlar, kaç kişiye
        burs verdikleri bilgisi ile birlikte, arzu ettikleri takdirde
        duyurulacaktır, sayfanın altında kendilerine yer edineceklerdir. Ayrıca
        bu kişi veya kurumlar, sağlayacakları bursları diledikleri gibi (çekiliş
        vs.) dağıtabilirler.
        <br />
        <br />
        Bu konuda son bir ayda{" "}
        <Text c="brand" fw={700} display={"inline"}>
          150'ye yakın
        </Text>{" "}
        kişiden mesaj aldığımız için, onların sesini duyurmanın sorumluluğunu
        hissediyoruz. Bir öğrencinin haftalık ücreti{" "}
        <Text c="brand" fw={700} display={"inline"}>
          200$
        </Text>{" "}
        değerindedir. Sizi az veya çok demeden, günlük hayatınıza etki etmeyecek
        şekilde, dilediğiniz miktarda burs vermeye davet ediyoruz. Tüm
        öğrenciler adına, sizler için teşekkür ederiz.
      </Text>
      <Grid align="center" my="lg" justify="center">
        <Grid.Col md={5} span={12}>
          <Stack justify="center" sx={{ justifyItems: "center" }}>
            <Text c="brand" fw={700} w="max-width" align="center">
              TOPLAM SAĞLANAN BURS
            </Text>
            <Text align="center" mt="-16px">
              <Text fw={700} c="brand" fz="4em" display={"inline"}>
                2,2
              </Text>{" "}
              <Text fw={500} c="brand" display={"inline"}>
                KİŞİ
              </Text>
            </Text>
          </Stack>
        </Grid.Col>
        <Grid.Col md={2} span={12}>
          <Center>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="3em"
              viewBox="0 0 576 512"
              fill={"#77040D"}
            >
              <path d="M312 24V34.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3 0 0c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8V232c0 13.3-10.7 24-24 24s-24-10.7-24-24V220.6c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2V24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z" />
            </svg>
          </Center>
        </Grid.Col>
        <Grid.Col md={5} span={12}>
          <Text c="brand" fw={700} align="center">
            USDT Adresi (BEP20)
          </Text>
          <Center mt={8}>
            <Kbd
              onClick={() =>
                clipboard.copy("0x6856e51acac213904a126f5334216ba054aaca92")
              }
              sx={{ cursor: "pointer" }}
            >
              <Group>
                {clipboard.copied ? <IconCheck /> : <IconCopy />}{" "}
                0x6856e51acac213904a126f5334216ba054aaca92
              </Group>
            </Kbd>
          </Center>
        </Grid.Col>
      </Grid>
      <Text>
        Burs verme aşamasında{" "}
        <Text c="brand" fw={700} display={"inline"}>
          bilgiblockchain@hotmail.com
        </Text>{" "}
        adresi ile iletişim kurmanızı rica ederiz. Böylece dilediğiniz takdirde
        yaptığınız iyiliği duyurabilir ve yardımınızdan yararlanan bir öğrenci
        olduğunda sizleri bilgilendirebiliriz.
      </Text>
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
