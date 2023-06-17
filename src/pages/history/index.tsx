import {
  Badge,
  Card,
  Group,
  Text,
  Image,
  SimpleGrid,
  AspectRatio,
  Button,
  Title,
  Grid,
} from "@mantine/core";

export const HistoryPage = () => {
  return (
    <>
      <Title order={1} mb="lg">
        Tarihçe
      </Title>
      <Title order={2} mb="lg">
        1. Dönem
      </Title>
      <Grid>
        <Grid.Col span={12} md={8}>
          <Text>
            Blockchain teknolojisinin gelişimiyle birlikte Türkiye'de henüz
            filizlenmekte olan Blockchain ekosistemine, 2019-2020 yılında
            temelini atmış olduğum Bilgi Blockchain olarak biz de dahil olduk.
            Bilgi Üniversitesi Blockchain kulübü olarak Türkiye'de kurulan ilk
            kulüplerden biri olduk. O yıllarda azınlık bir kitle tarafından bu
            teknolojinin sadece kripto varlıklar kısmı bilinirken, Bilgi
            Blockchain olarak Blockchain teknolojisininin sadece kripto para
            alım satımından ibaret olmayıp, en az internet kadar devrim
            yaratacak bir teknoloji olduğunu tüm felsefesiyle birlikte
            öğrencilere aktarmayı misyon edindik. Daha sonrasında bizimle aynı
            vizyona sahip olan, ekosistemin bilinen isimleriyle etkinlikler ve
            bu alanın teknik tarafına hakim uzmanlarla uygulamalı eğitimler
            düzenledik. Bu etkinlikler ile birçok arkadaşımızın ilk defa cüzdan
            sahibi olup merkeziyetsiz finans dünyasına dahil olmasına vesile
            olduk. Hatta sadece kulüp içinde kullanmak amaçlı Avalanche üzerinde
            kendi tokenimiz olan Bilgi Blockchain Token BBT’yi yarattık.
          </Text>
        </Grid.Col>
        <Grid.Col md={4} sm={6} span={12}>
          <AspectRatio
            ratio={0.88}
            sx={(theme) => ({
              overflow: "hidden",
              borderRadius: theme.radius.lg,
            })}
          >
            <Image src="/images/donem1.jpeg" alt="Murat Seyitmuhammedov" />
          </AspectRatio>
          <Text c="dark.4" align="center">
            <Text fw={700}>Murat Seyitmuhammedov</Text>
            <Text>Nisan 2020 - Mayıs 2021</Text>
          </Text>
        </Grid.Col>
      </Grid>
      <Title order={2} mb="lg" mt="xl">
        2. Dönem
      </Title>
      <Grid>
        <Grid.Col span={12} md={8}>
          <Text>
            2021'in yaz ayında başkanlık görevini devraldığım Bilgi
            Blockchain'i, zaman içerisinde inşa edilen güçlü ekibim ile birlikte
            Türkiye'nin en farklı Blockchain kulübü haline getirdik. Kuruluş
            dönemi olarak nitelendirdiğimiz, 34 haftalık ilk akademik yılımızda
            tam 26 etkinlik gerçekleştirerek, gelecek yıllar için sağlam bir
            zemin oluşturduk. İkinci yılımda ise 'Bir kulüpten daha fazlası'
            olma amacıyla başlattığımız projelerimizi bir bir gerçekleştirdik.
            Kulübümüzün ana iki odağını medya ve eğitim olarak belirledik ve bu
            iki alanda da çok ciddi, daha önce hiç örneği olmayan atılımlar
            gerçekleştirdik. Kulübümüzün resmi YouTube kanalını açarak içerisini
            birbirinden farklı videolarla doldururken, Zincirsiz adını
            verdiğimiz TalkShow programımız ile gündemde büyük yer edindik. Ek
            olarak eğitim tarafında ise, 2022'de birlikte yolculuğa çıktığımız
            Arkhe Projesi ile birlikte Türkiye'deki Blockchain ekosisteminde
            daha önce hiç görülmemiş seviyede Blockchain kampları düzenledik. Bu
            kamplarımızda yüzlerce öğrenciye, onlarca yıldız isimle birlikte
            hayatları boyunca unutamayacakları güzel deneyimler yaşattık. Her
            zaman hedeflediğimiz gibi, bundan sonra da gerçekleştirceğimiz
            projelerimiz ile 'Bir kulüpten daha fazlası' olmaya devam edeceğiz.
          </Text>
        </Grid.Col>
        <Grid.Col md={4} sm={6} span={12}>
          <Image src="/images/donem2.jpeg" alt="Sinancan Öztürk" radius="lg" />
          <Text c="dark.4" align="center">
            <Text fw={700}>Sinancan Öztürk</Text>
            <Text>Haziran 2021 -</Text>
          </Text>
        </Grid.Col>
      </Grid>
    </>
  );
};
