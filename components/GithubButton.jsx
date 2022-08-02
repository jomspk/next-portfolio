import { Button, Image, Link } from "@chakra-ui/react";

export default function GithubButton() {
  return (
    <Link href="/">
      <Button colorScheme="whatsapp">
        GitHub
        <Image src="img/outSource_icon.png" alt="outSource" />
      </Button>
    </Link>
  );
}
