import { Title, Text } from "@mantine/core";

export const AboutPage = () => {
  return (
    <>
      <Title order={1} mb="lg">
        Hakkımızda
      </Title>
      <Text>
        2020 yılında İstanbul Bilgi Üniversitesinde kurulmuş, Blockchain
        teknolojisinin hayatımıza kattığı 'yenilik' kavramını ilke edinmiş ve
        bir kulüpten daha fazlası olma amacıyla çalışmalarına başlamış
        üniversite kulübüdür.
        <br />
        <br />
        Blockchain'in finansal tarafından çok teknolojisine odaklanmayı tercih
        eden bir kulüp olarak, geleneksel kulüpçülük anlayışının dışına çıkarak
        bir ilki gerçekleştirmek ve diğer kulüplere de kendi sınırlarını
        keşfetmeleri konusunda ilham olmayı arzuluyoruz.
        <br />
        <br />
        Vizyonumuz, gün geçtikçe büyüyen Blockchain teknolojisi ile ilgili
        sosyal medyada çeşitli içerikler üreterek, yenilikçi projeler
        gerçekleştirerek ve sertifikalı eğitimler vererek önce Türkiye çapında
        bir topluluğa sahip olarak bilinen bir marka haline gelmek, ardından
        ülkemizi Blockchain alanında global anlamda temsil etmektir.
      </Text>
    </>
  );
};
