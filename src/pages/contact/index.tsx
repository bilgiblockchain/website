import { Grid, Title, Text } from "@mantine/core";

export const ContactPage = () => {
  return (
    <>
      <Grid>
        <Grid.Col span={12} md={8}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfniFJCnAOHOe65rnRpKiV6TE_xIxgeJYR_SI_WXTWUnxFVcQ/viewform?embedded=true"
            width="100%"
            height="700"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          >
            Yükleniyor…
          </iframe>
        </Grid.Col>
        <Grid.Col span={12} md={4}>
          <Text>
            <Title order={1} my={24}>
              Adres
            </Title>
            Eski Silahtarağa Elektrik Santrali Kazım Karabekir Cad. No:2
            <br />
            Eyüpsultan 34060 İstanbul Türkiye
            <br />
            <br />
            <Text fw={700} c="brand">
              E-Posta: bilgiblockchain@hotmail.com
            </Text>
          </Text>
        </Grid.Col>
      </Grid>
      {/* <AspectRatio ratio={16 / 9}>
        <iframe
          src="https://www.google.com/maps/embed/v1/place?q=Eski%20Silahtara%C4%9Fa%20Elektrik%20Santrali%20Kaz%C4%B1m%20Karabekir%20Cad.%20No%3A2%20Ey%C3%BCpsultan%2034060%20%C4%B0stanbul%20T%C3%BCrkiye"
          title="Google map"
          style={{ border: 0 }}
          frameBorder={0}
          referrerPolicy="no-referrer-when-downgrade"
        />
      </AspectRatio> */}
    </>
  );
};
