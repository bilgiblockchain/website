import { Title, Text, Divider, Box, Button } from "@mantine/core";
import { link } from "fs";
import { Link } from "react-router-dom";

export const FaqPage = () => {
  return (
    <>
      <Title order={1} mb="lg">
        Sıkça Sorulan Sorular
      </Title>
      {/* <Divider /> */}
      <Box p="xs">
        <Title order={2}>Bilgi Blockchain kulübü nedir?</Title>
        <Text>
          2020 yılında İstanbul Bilgi Üniversitesinde kurulmuş, Blockchain
          teknolojisinin hayatımıza kattığı 'yenilik' kavramını ilke edinmiş ve
          bir kulüpten daha fazlası olma amacıyla çalışmalarına devam eden
          üniversite kulübüdür.
          <br />
          <br />
          Blockchain'in finansal veya yazılımsal tarafından çok medya ve eğitim
          tarafına odaklanmayı tercih eden bir kulüp olarak, geleneksel
          kulüpçülük anlayışının dışına çıkarak bir ilki gerçekleştirmek ve
          diğer kulüplere de kendi sınırlarını keşfetmeleri konusunda ilham
          olmayı arzuluyoruz.
        </Text>
        <br />
        <Title order={2}>Kulübünüze nasıl üye olabilirim?</Title>
        <Text>
          Kulübümüze sadece İstanbul Bilgi Üniversitesi öğrencilerini değil, her
          üniversiteden öğrenciler üye olabilir. Ayrıca bütün etkinliklerimize
          de her yerden Blockchain tutkunları katılabilir. Kulübümüze üye olmak
          veya ekibimizde çalışmak için, aşağıdaki bağlantılara
          tıklayabilirsiniz.
        </Text>
        <Box my="sm">
          <Link to="https://forms.gle/yeu2GQ1aFKYCC7ST6" target="_blank">
            <Button variant="light">Üye Başvuru</Button>
          </Link>{" "}
          <Link to="https://forms.gle/3Y1cVX4ys5GiuFUk9" target="_blank">
            <Button>Ekip Başvuru</Button>
          </Link>
        </Box>
        <br />
        <Title order={2}>
          Ekibinize katılmamın bana ne gibi bir faydası olacak?
        </Title>
        <Text>
          Bilgi Blockchain kulübü, özellikle Türkiye gibi Blockchain
          ekosisteminde öğrenci kulüplerinin çok fazla rolü olduğu bir ortamda,
          ortalama bir Blockchain kulübünden daha farklı bir prestije sahiptir
          ve çalışmalarını da bu doğrultuda sürdürür. Son derece profesyonel bir
          çalışma düzenine sahip olan kulübümüz, gelecekte Blockchain
          sektöründeki çalışma ortamına adapte olabilmek için en iyi
          seçeneklerden bir tanesidir.
        </Text>
        <br />
        <Title order={2}>Sizleri nereden takip edebilirim?</Title>
        <Text>
          Bizleri website ve sosyal medya kanallarımız aracılığıyla takip
          edebilirsiniz. Bütün adreslerimize{" "}
          <a href="https://linktr.ee/bilgiblockchain">buradan</a>{" "}
          ulaşabilirsiniz.
        </Text>
      </Box>
    </>
  );
};
