import { Box, Image, Flex, Link, Spacer } from "@chakra-ui/react";
import styles from "../styles/components/Header.module.scss";

export default function Header() {
  return (
    <Flex className={styles["header"]}>
      <Box className={styles["header-title"]}>
        <Link href="/">
          <Image className={styles["header-title__icon"]} src="/img/header_icon.png" alt="HeaderIcon" />
        </Link>
      </Box>
      <Spacer />
      <Box>
        <Link className={styles["link"]} href="/">
          HOME
        </Link>
        <Link className={styles["link"]} href="/about">
          About Me
        </Link>
        <Link className={styles["link"]} href="/product">
          Products
        </Link>
      </Box>
    </Flex>
  );
}
