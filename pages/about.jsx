import { Box, Text, Image, HStack, Link, Center } from "@chakra-ui/react";

import styles from "../styles/components/About.module.scss";

export default function AboutMe() {
  return (
    <>
      <Text fontSize="5xl" textAlign="left">
        About me
      </Text>
      <Box borderWidth="1px" borderRadius="lg">
        <Box>
          <Image className={styles["profile_icon"]} src="/img/header_icon.png" alt="ProfileIcon" />
          <Text fontSize="5xl">JOJO</Text>
          <Text fontSize="3xl">(安井番厘)</Text>
          <Center>
            <HStack>
              <Link href="https://www.facebook.com/banri.yasui">
                <Image className={styles["sns_icon"]} src="/img/facebook_icon.png" alt="facebookIcon" />
              </Link>
              <Link href="https://github.com/jomspk">
                <Image className={styles["sns_icon"]} src="/img/github_icon.png" alt="githubIcon" />
              </Link>
              <Link href="https://twitter.com/Bazar1305">
                <Image className={styles["sns_icon"]} src="/img/twitter_icon.png" alt="twitterIcon" />
              </Link>
            </HStack>
          </Center>
        </Box>
        <Box textAlign="left">
          <Text fontSize="2xl">自己紹介</Text>
          <Text>hogehogeのhoge</Text>
        </Box>
      </Box>
    </>
  );
}
