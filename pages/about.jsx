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
          <Text>
            会津大学学部4年。小学校３年までキリスト教の学校に通い、英語を学ぶ。小学校３年からテニスを始め、中学生までに多くの賞を受賞した。中学の時に見たSAOというアニメの世界観に憧れて、BMI(ブレインマシンインターフェース)という技術に興味を持ち、高校から情報系の学部に入ることを目指して勉強を始める。大学一年からプログラミングを始めた。英語、01ビジネス、プログラミングに軸を置いた大学生活を送る。
          </Text>
          <Text fontSize="2xl">受賞歴</Text>
          <UnorderedList>
            <ListItem>2018/06 VRサークル内ハッカソン 何かの賞を受賞</ListItem>
            <ListItem>2020/01 SparkTohoku Startup Pitch 仙台市長賞、EO賞を受賞</ListItem>
            <ListItem>2020/05 羽田アイデアソン 何かの賞を受賞</ListItem>
            <ListItem>2020/10 会津ワクチンハッカソン 最優秀賞</ListItem>
          </UnorderedList>
          <Text fontSize="2xl">参加イベント</Text>
          <UnorderedList>
            <ListItem>2018/08 東北大学での国際学会に参加</ListItem>
            <ListItem>2018/12 オーケストラにヴァイオリン演奏者として参加</ListItem>
            <ListItem>2020/04 シリコンバレーインターンシップに参加</ListItem>
            <ListItem>2020/06 技育展に参加</ListItem>
            <ListItem>2020/11 日本×台湾 グローバルLT開催</ListItem>
          </UnorderedList>
          <Text fontSize="2xl">保有資格</Text>
          <UnorderedList>
            <ListItem>英検2級(2017年合格)</ListItem>
            <ListItem>TOEIC 810点(2022年)</ListItem>
          </UnorderedList>
          <Text fontSize="2xl">職歴</Text>
          <UnorderedList>
            <ListItem>2021/06〜2022/01 大学修学支援室(生徒の質問対応)</ListItem>
            <ListItem>2022/01〜現在 アクロスロード株式会社 長期インターンシップ フルタイム開発 (Solidityでコントラクト開発、Javaでサーバーサイド、JavaScriptでフロント)</ListItem>
            <ListItem>2022/05〜現在 Hewlett Packard Enterprise 長期インターンシップ (ネットワーク環境構築、ネットワーク機器を使ったプロダクト開発)</ListItem>
            <ListItem>2022/07〜現在 Web3Quizプラットフォームの仕事 (コントラクト開発、フロント開発)</ListItem>
          </UnorderedList>
          <Text fontSize="2xl">大学のプログラム</Text>
          <UnorderedList>
            <ListItem>2019/04〜現在　全英語コースを履修</ListItem>
            <ListItem>ベンチャー育成プログラムを履修</ListItem>
            <ListItem>テクニカルコミュニケータープログラムを履修</ListItem>
          </UnorderedList>
          <Text fontSize="2xl" fontWeight="500">
            Skills
          </Text>
          <Text fontSize="2xl">言語</Text>
          <UnorderedList>
            <ListItem>C言語</ListItem>
            <ListItem>Java</ListItem>
            <ListItem>JavaScript</ListItem>
            <ListItem>C++</ListItem>
            <ListItem>C#</ListItem>
            <ListItem>Python</ListItem>
            <ListItem>Solidity</ListItem>
            <ListItem>Haskell</ListItem>
          </UnorderedList>
          <Text fontSize="2xl">フレームワーク</Text>
          <UnorderedList>
            <ListItem>Next.js</ListItem>
            <ListItem>Bootstrap</ListItem>
            <ListItem>Spring</ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </Box>
  );
}
