import { Box, Image, Flex, Text, HStack, Heading } from "@chakra-ui/react";
import styles from "../styles/components/Header.module.scss";
import AccordionMenu from "./Molecules/AccordionMenu";
import NextLink from "next/link";
import { Link as ChakraUILink } from "@chakra-ui/react";
const Links = { HOME: "/", "About Me": "/about", Products: "/product" };

export default function Header() {
  const hoge = () => {
    return (
      <Box className={styles["header"]}>
        <Flex margin="0px 200px" padding="0px 12px" align="center" justify="space-between">
          <Box className={styles["header-title"]}>
            <NextLink href="/">
              <ChakraUILink>
                <HStack>
                  <Image className={styles["header-title__icon"]} src="/img/header_icon.png" alt="HeaderIcon" />
                  <Heading color="white">JOJO</Heading>
                </HStack>
              </ChakraUILink>
            </NextLink>
          </Box>
          <HStack spacing={8} alignItems={"center"}>
            {Object.keys(Links).map((title) => (
              <NextLink key={title} href={Links[title]}>
                <ChakraUILink className={styles["link"]}>{title}</ChakraUILink>
              </NextLink>
            ))}
          </HStack>
        </Flex>
      </Box>
    );
  };

  return (
    <>
      <Box display={{ base: "block", lg: "none" }}>
        <AccordionMenu />
      </Box>
      <Box display={{ base: "none", lg: "block" }}>{hoge()}</Box>
    </>
  );
}
