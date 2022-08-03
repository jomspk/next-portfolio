import { HStack, Text, GridItem, Image, Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";
import GithubButton from "../GithubButton";

export default function ProductGrid({ product }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  if (product == null) return null;

  return (
    <GridItem colSpan={1}>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" margin="0 auto">
        <Box onClick={onOpen}>
          <Image h="200px" w="100%" margin="0 auto" padding="0 10px 0 10px" src={product.imageURL} alt="No Image" />
          <Text fontSize="2xl" fontWeight="500">
            {product.title}
          </Text>
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
