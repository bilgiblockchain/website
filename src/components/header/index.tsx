import {
  Box,
  Burger,
  Center,
  Container,
  Group,
  Image,
  Header as MantineHeader,
  Menu,
  UnstyledButton,
  createStyles,
} from "@mantine/core";
import { useColorScheme, useDisclosure } from "@mantine/hooks";
import { RefineThemedLayoutV2HeaderProps } from "@refinedev/mantine";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandYoutube,
  IconChevronDown,
} from "@tabler/icons";
import { AppIcon } from "../app-icon";
import { useLink } from "@refinedev/core";

const HEADER_HEIGHT = 48;
const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.fn.primaryColor(),
  },
  sticky: {
    position: "sticky",
    top: 0,
  },
  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    color: "white",
    fontSize: theme.fontSizes.sm,
    fontWeight: 700,
    letterSpacing: "1px",
    textDecoration: "none",
    textTransform: "uppercase",

    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.2)",
    },
  },

  linkLabel: {
    marginRight: 4,
  },
  dropdown: {
    backgroundColor: theme.fn.primaryColor(),
  },
  burgermenu: {},
  dropdownItem: {
    "&[data-hovered]": {
      backgroundColor: "rgba(0,0,0,0.2)",
    },
  },
  dropdownItemLink: {
    textDecoration: "none",
    color: "white",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textTransform: "uppercase",
    fontSize: theme.fontSizes.sm,
    fontWeight: 700,
    letterSpacing: "2px",
  },
}));

type Links = {
  link: string;
  label: string;
  links?: { link: string; label: string }[];
}[];
type Prop = {
  links: Links;
} & RefineThemedLayoutV2HeaderProps;

export const Header: React.FC<Prop> = ({ sticky, links }) => {
  const { classes, cx } = useStyles();
  const [opened, { toggle, open, close }] = useDisclosure(false);
  const Link = useLink();
  const colorScheme = useColorScheme();

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>
        <Link to={item.link} className={classes.dropdownItemLink}>
          {item.label}
        </Link>
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          withinPortal
          offset={10}
          classNames={{
            dropdown: classes.dropdown,
            item: classes.dropdownItem,
          }}
        >
          <Menu.Target>
            <Link to={link.link} className={classes.link}>
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </Link>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link key={link.label} to={link.link} className={classes.link}>
        {link.label}
      </Link>
    );
  });
  return (
    <>
      <Box
        sx={(theme) => ({
          backgroundColor: "transparent",
          // backgroundColor: theme.colorScheme === "dark" ? "dark.9" : "transparent",
        })}
      >
        <Container>
          <Link to="/" style={{ display: "block" }}>
            <Image
              src={"/images/text-logo.png"}
              width={"100%"}
              height={320}
              styles={{ root: { margin: "auto" }, image: { margin: "auto" } }}
            />
          </Link>
        </Container>
      </Box>
      <MantineHeader
        height={HEADER_HEIGHT}
        mb={120}
        className={cx(classes.header, { [classes.sticky]: sticky })}
      >
        <Container>
          <Group
            style={{ justifyContent: "space-between", height: HEADER_HEIGHT }}
          >
            <Group
              align="center"
              sx={(theme) => ({
                "& a": { lineHeight: "0.5em", color: theme.colors.brand[1] },
              })}
            >
              <Link to="/">
                <AppIcon size={HEADER_HEIGHT * 0.8} mr="sm" />
              </Link>
              <a
                href="https://www.youtube.com/@bilgiblockchain"
                target="_blank"
              >
                <IconBrandYoutube size={20} />
              </a>
              <a
                href="https://www.instagram.com/bilgiblockchain/"
                target="_blank"
              >
                <IconBrandInstagram size={20} />
              </a>
              <a href="https://twitter.com/bilgiblockchain" target="_blank">
                <IconBrandTwitter size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/bilgi-blockchain/"
                target="_blank"
              >
                <IconBrandLinkedin size={20} />
              </a>
            </Group>

            <Group spacing={4} className={classes.links}>
              {items}
            </Group>
            <Menu
              shadow="md"
              width={200}
              opened={opened}
              onChange={(newState) => (newState ? open() : close())}
              position="bottom-end"
              classNames={{
                dropdown: cx(classes.dropdown, classes.burgermenu),
                item: classes.dropdownItem,
              }}
            >
              <Menu.Target>
                <UnstyledButton className={classes.burger}>
                  <Burger
                    opened={opened}
                    onClick={toggle}
                    size="sm"
                    color="white"
                  />
                </UnstyledButton>
              </Menu.Target>
              <Menu.Dropdown>{items.map((item) => item)}</Menu.Dropdown>
            </Menu>
          </Group>
        </Container>
      </MantineHeader>
    </>
  );
};
