import { Carousel } from "@mantine/carousel";
import { IconArrowNarrowRight } from "@tabler/icons";
import { Text, Image, Title, AspectRatio, Button } from "@mantine/core";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  return (
    <>
      <Title order={1} my="xl" c="brand" align="center" size="3em">
        Arkhe Blockchain Week 2023
      </Title>
      <Carousel
        height={600}
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
          .map((_, i) => ({ image: `/images/arkhe${i + 1}.jpg` }))
          .map(({ image }) => {
            return (
              <Carousel.Slide>
                <Image src={image} fit="contain" />
              </Carousel.Slide>
            );
          })}
      </Carousel>
      <Text mt="xl">
        Yemyeşil ormanların, derin maviliğin ve İzmir'in tarihle harmanlanmış
        Şirince köyünün büyüleyici atmosferinde sizi, 2023 Arkhe Blockchain
        Week'in büyülü dünyasına davet ediyoruz. Bu, sadece bir etkinlik değil,
        bir bilgi yolculuğu, bir keşif ve en önemlisi, Blockchain teknolojisinin
        meraklılarıyla geçirilecek unutulmaz{" "}
        <Text c="brand" fw={700} display={"inline"}>
          iki hafta
        </Text>
        .
        <br />
        <br />
        <AspectRatio ratio={1.777777777777}>
          <iframe
            width="100%"
            height="720"
            src="https://www.youtube.com/embed/vkDCxj4ChIY"
            title="Stablecoin Nedir?"
            frameBorder={0}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </AspectRatio>
        <br />
        <br />
        Büyülü bir yolculuğa hazır mısınız? Peki ya bilginin doruklarına
        tırmanırken aynı zamanda doğanın kucağında huzuru bulmaya? Geçen yıl
        başlattığımız bu eşsiz deneyim, bu yıl daha da genişleyerek{" "}
        <Text c="brand" fw={700} display={"inline"}>
          400 öğrenci
        </Text>{" "}
        ile birlikte Blockchain'in sonsuz evrenini keşfedecek.
        <br />
        <br />
        Blockchain teknolojisinin farklı yüzlerini{" "}
        <Text c="brand" fw={700} display={"inline"}>
          25 uzman hoca
        </Text>{" "}
        eşliğinde, çeşitli atölye çalışmaları ve seminerlerle keşfedeceksiniz.
        Blockchain'in temellerinden kodlamaya, gelişmiş finansal sistemlerden
        hukukunun karmaşık dünyasına, NFT'nin yaratıcı evreninden token
        ekonomisinin dinamiklerine kadar, her konuyu ele alacağız.
        <br />
        <br />
        Sadece yeni başlayanlar değil, sektördeki profesyoneller ve Blockchain
        dünyasına meraklı herkes için bir buluşma noktası olacak iki haftalık bu
        etkinlik boyunca, sizlere sektördeki en deneyimli hocalarla tanışma,
        bilgi ve deneyimlerini paylaşma, yeni bağlantılar kurma ve Blockchain
        teknolojisi hakkında yeni fikirler geliştirme fırsatı sunuyoruz.
        <br />
        <br />
        2023 Arkhe Blockchain Week, sadece bir etkinlik değil, bir bilgi
        festivalleri, bir buluşma noktası ve geleceğin teknolojisi olan
        Blockchain hakkında daha fazla bilgi edinme fırsatı. Siz de bu büyülü
        yolculuğa katılın ve Blockchain dünyasının heyecan verici manzaralarını
        bizimle keşfedin!
      </Text>
      <Link to="/arkhe" preventScrollReset>
        <Button color="brand" size="lg" my="xl">
          DAHA FAZLA BİLGİ İÇİN
          <IconArrowNarrowRight />
        </Button>
      </Link>
    </>
  );
};
