import { PropsWithChildren } from "react";
import { Header } from "../header";
import { Container, Paper } from "@mantine/core";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const links = [
    { link: "/hakkimizda", label: "hakkımızda" },
    { link: "/iletisim", label: "İLETİŞİM" },
    {
      link: "/ekip",
      label: "EKİP",
    },
    {
      link: "/tarihce",
      label: "TARİHÇE",
    },
    { link: "/arkhe", label: "arkhe" },
    { link: "/sss", label: "SSS" },
  ];
  return (
    <>
      <Header sticky links={links}></Header>
      <Container>
        <Paper shadow="md" radius="md" p="xl" mb="xl" withBorder>
          {children}
        </Paper>
      </Container>
    </>
  );
};
