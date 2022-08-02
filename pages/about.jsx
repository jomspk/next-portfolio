import { Box, Text, Image, HStack, Link, Center, UnorderedList, ListItem } from "@chakra-ui/react";

import styles from "../styles/components/About.module.scss";

export default function AboutMe() {
  return (
    <Box margin="50px 50px">
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
          <Text fontSize="2xl">受賞歴</Text>
          <Text>hogehogeのhoge</Text>
          <Text fontSize="2xl">保有資格</Text>
          <Text>hogehogeのhoge</Text>
          <Text fontSize="2xl">職歴</Text>
          <Text>hogehogeのhoge</Text>
          <Text fontSize="2xl">大学での活動</Text>
          <Text>hogehogeのhoge</Text>
          <Text fontSize="2xl" fontWeight="500">
            Skills
          </Text>
          <Text>hogehogeのhoge</Text>
          <Text fontSize="2xl">言語</Text>
          <UnorderedList>
            <ListItem>hogehoge</ListItem>
            <ListItem>hogehoge</ListItem>
            <ListItem>hogehoge</ListItem>
          </UnorderedList>
          <Text fontSize="2xl">フレームワーク</Text>
          <Text>hogehogeのhoge</Text>
          <Text fontSize="2xl">ハードウェア機器</Text>
          <Text>hogehogeのhoge</Text>
        </Box>
      </Box>
    </Box>
  );
}
