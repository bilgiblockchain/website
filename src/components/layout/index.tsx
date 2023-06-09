import { PropsWithChildren } from "react";
import { Header } from "../header";
import { Container } from "@mantine/core";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const links = [
    { link: "/about", label: "ABOUT" },
    { link: "/contact", label: "CONTACT" },
    { link: "/team", label: "TEAM", links: [{ link: "/heyy", label: "heyy" }] },
    { link: "/faq", label: "FAQ" },
  ];
  return (
    <>
      <Header sticky links={links}></Header>
      <Container>{children}</Container>
    </>
  );
};
