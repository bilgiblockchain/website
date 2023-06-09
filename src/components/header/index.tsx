import {
  AspectRatio,
  Burger,
  Center,
  Container,
  Group,
  Image,
  Header as MantineHeader,
  Menu,
  createStyles,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { RefineThemedLayoutV2HeaderProps } from "@refinedev/mantine";
import { IconChevronDown } from "@tabler/icons";
import { AppIcon } from "../app-icon";

const HEADER_HEIGHT = 72;
const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: "#77040d",
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
    padding: `8 12`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: "white",
    fontSize: theme.fontSizes.sm,
    fontWeight: 700,
    letterSpacing: "2px",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 4,
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
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" withinPortal>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });
  return (
    <>
      <div style={{ backgroundColor: "white" }}>
        <Container>
          <Image src={"/images/text-logo.png"} width={"100%"} height={320} />
        </Container>
      </div>
      <MantineHeader
        height={HEADER_HEIGHT}
        mb={120}
        className={cx(classes.header, { [classes.sticky]: sticky })}
      >
        <Container>
          <Group
            style={{ justifyContent: "space-between", height: HEADER_HEIGHT }}
          >
            <AppIcon size={HEADER_HEIGHT * 0.8} />
            {/* <Image
              src={"/images/text-logo.png"}
              width={240}
              height={HEADER_HEIGHT}
            /> */}
            <Group spacing={20} className={classes.links}>
              {items}
            </Group>
            <Burger
              opened={opened}
              onClick={toggle}
              className={classes.burger}
              size="sm"
            />
          </Group>
        </Container>
      </MantineHeader>
    </>
  );
};
