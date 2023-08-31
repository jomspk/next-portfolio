import { Accordion, AccordionItem, Box, Flex, Heading, AccordionButton, AccordionPanel, Image, HStack } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import styles from "../../styles/components/Header.module.scss";
import NextLink from "next/link";
import { Link as ChakraUILink } from "@chakra-ui/react";

const Links = { HOME: "/", "About Me": "/about", Products: "/product" };

export default function AccordionMenu() {
  return (
    <Accordion allowToggle borderColor="black">
      <AccordionItem className={styles["header"]}>
        <Flex margin="auto" padding="0px 12px" align="center" justify="space-between">
          <NextLink href="/">
            <HStack>
              <Image className={styles["header-title__icon"]} src="../img/header_icon.png" alt="HeaderIcon" />
              <Heading color="white">JOJO</Heading>
            </HStack>
          </NextLink>
          <Box>
            <AccordionButton>
              <HamburgerIcon className={styles["hamburger"]} />
            </AccordionButton>
          </Box>
        </Flex>
        <AccordionPanel>
          <Flex direction="column">
            {Object.keys(Links).map((title) => (
              <NextLink key={title} href={Links[title]}>
                <ChakraUILink className={styles["link"]}>{title}</ChakraUILink>
              </NextLink>
            ))}
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
