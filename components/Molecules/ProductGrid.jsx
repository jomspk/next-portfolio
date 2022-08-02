import { HStack, Text, Grid, GridItem, Image, Link, Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";
import GithubButton from "../GithubButton";

export default function ProductGrid({ product }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { title, imageURL, description } = product;
  console.log(product);
  if (product == null) return null;
  console.log("product Grid");

  return (
    <GridItem colSpan={1}>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" margin="0 auto">
        <Box onClick={onOpen}>
          <Image h="130px" w="100%" margin="0 auto" padding="0 10px 0 10px" src={product.imageURL} alt="No Image" />
          <Text>{product.title}</Text>
          <Text>hoge</Text>
        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent maxH="70%" maxW="80%">
            <HStack>
              <Image height="20em" width="25em" src={product.imageURL} alt="No Image" />
              <Box>
                <ModalHeader>{product.title}</ModalHeader>
                <GithubButton />
                <ModalCloseButton />
                <ModalBody>{product.description}</ModalBody>
              </Box>
            </HStack>
          </ModalContent>
        </Modal>
      </Box>
    </GridItem>
  );
}
