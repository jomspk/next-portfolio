import { Box, Text, Image, HStack, Center, UnorderedList, ListItem } from "@chakra-ui/react";
import Link from "next/link";
import styles from "../styles/components/About.module.scss";
import { useState, useEffect } from "react";

import { useCreaterList } from "../hooks/useCreaterList";

export default function AboutMe() {
  const [createrDocs, setCreaterDocs] = useState(null);

  const hookCreaterDocs = useCreaterList();

  useEffect(() => {
    setCreaterDocs(hookCreaterDocs);
  }, [hookCreaterDocs]);
  const SnsLinks = [
    { href: "https://www.facebook.com/banri.yasui", src: "/img/facebook_icon.png", alt: "facebookIcon" },
    { href: "https://github.com/jomspk", src: "/img/github_icon.png", alt: "githubIcon" },
    { href: "https://twitter.com/Bazar1305", src: "/img/twitter_icon.png", alt: "twitterIcon" },
  ];
  if (createrDocs == null) {
    return <Text>miss</Text>;
  } else {
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
                {Object.keys(SnsLinks).map((elm) => (
                  <Link key={SnsLinks[elm].alt} href={SnsLinks[elm].href}>
                    <Image className={styles["sns_icon"]} src={SnsLinks[elm].src} alt={SnsLinks[elm].alt} />
                  </Link>
                ))}
              </HStack>
            </Center>
          </Box>
          <Box textAlign="left" margin="50px 50px">
            <Text fontSize="2xl">自己紹介</Text>
            <Text>{createrDocs.intro.introSentence}</Text>
            <br />
            <Text fontSize="2xl">受賞歴</Text>
            <UnorderedList>
              {Object.keys(createrDocs.reward).map((index) => {
                return <ListItem key={index}>{createrDocs.reward[index]}</ListItem>;
              })}
            </UnorderedList>
            <br />
            <Text fontSize="2xl">参加イベント</Text>
            <UnorderedList>
              {Object.keys(createrDocs.event).map((index) => {
                return <ListItem key={index}>{createrDocs.event[index]}</ListItem>;
              })}
            </UnorderedList>
            <br />
            <Text fontSize="2xl">保有資格</Text>
            <UnorderedList>
              {Object.keys(createrDocs.certificate).map((index) => {
                return <ListItem key={index}>{createrDocs.certificate[index]}</ListItem>;
              })}
            </UnorderedList>
            <br />
            <Text fontSize="2xl">職歴</Text>
            <UnorderedList>
              {Object.keys(createrDocs.jobs).map((index) => {
                return <ListItem key={index}>{createrDocs.jobs[index]}</ListItem>;
              })}
            </UnorderedList>
            <br />
            <Text fontSize="2xl">大学のプログラム</Text>
            <UnorderedList>
              {Object.keys(createrDocs.program).map((index) => {
                return <ListItem key={index}>{createrDocs.program[index]}</ListItem>;
              })}
            </UnorderedList>
            <br />
            <Text fontSize="2xl">好きなTOP3アニメ（強引に決めるなら）</Text>
            <UnorderedList>
              {Object.keys(createrDocs.anime).map((index) => {
                return <ListItem key={index}>{createrDocs.anime[index]}</ListItem>;
              })}
            </UnorderedList>
            <br />
            <Text fontSize="2xl" fontWeight="500">
              Skills
            </Text>
            <Text fontSize="2xl">言語</Text>
            <UnorderedList>
              {Object.keys(createrDocs.lang).map((index) => {
                return <ListItem key={index}>{createrDocs.lang[index]}</ListItem>;
              })}
            </UnorderedList>
            <br />
            <Text fontSize="2xl">フレームワーク</Text>
            <UnorderedList>
              {Object.keys(createrDocs.framework).map((index) => {
                return <ListItem key={index}>{createrDocs.framework[index]}</ListItem>;
              })}
            </UnorderedList>
            <br />
            <Text fontSize="2xl">使用ブロックチェーン</Text>
            <UnorderedList>
              {Object.keys(createrDocs.blockchain).map((index) => {
                return <ListItem key={index}>{createrDocs.blockchain[index]}</ListItem>;
              })}
            </UnorderedList>
          </Box>
        </Box>
      </Box>
    );
  }
}
