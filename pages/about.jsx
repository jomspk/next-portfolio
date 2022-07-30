import { Box, Text, Image } from "@chakra-ui/react";

import styles from "../styles/components/About.module.scss";

export default function AboutMe() {
  return (
    <>
      <Box>
        <Text fontSize="5xl">About me</Text>
      </Box>
      <Box borderWidth="1px" borderRadius="lg">
        <Box>
          <Image className={styles["icon"]} src="/img/header_icon.png" alt="HeaderIcon" />
          <Text fontSize="5xl">JOJO</Text>
          <Text fontSize="3xl">(安井番厘)</Text>
        </Box>
        <Box></Box>
      </Box>
    </>
  );
}
