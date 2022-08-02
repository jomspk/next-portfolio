import { HStack, Text, Grid, GridItem, Image, Link, Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";
import GithubButton from "../components/GithubButton";

export default function Product() {
  const about = {
    imageUrl: "/img/about.png",
    imageAlt: "About Me",
    title: "About Me",
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Text fontSize="5xl" textAlign="left">
        Products
      </Text>
      <Grid h="200" templateColumns="repeat(4, 1fr)" gap={4}>
        <GridItem colSpan={1}>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" margin="0 auto">
            <Box onClick={onOpen}>
              <Image h="130px" w="100%" margin="0 auto" padding="0 10px 0 10px" src={about.imageUrl} alt={about.imageAlt} />
              <Text>hogehogeプロダクト</Text>
              <Text>制作日：10月</Text>
            </Box>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent maxH="70%" maxW="80%">
                <HStack>
                  <Image height="20em" width="25em" src={about.imageUrl} alt={about.imageAlt} />
                  <Box>
                    <ModalHeader>Modal Title</ModalHeader>
                    <GithubButton />
                    <ModalCloseButton />
                    <ModalBody>hogehogeohgoeogheohgeohgoeh</ModalBody>
                  </Box>
                </HStack>
              </ModalContent>
            </Modal>
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" margin="0 auto">
            <Text>hoge</Text>
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" margin="0 auto">
            <Text>hoge</Text>
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" margin="0 auto">
            <Text>hoge</Text>
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" margin="0 auto">
            <Text>hoge</Text>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}
