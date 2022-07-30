import { Text, Grid, GridItem, Image, Link, Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Lorem } from "@chakra-ui/react";

export default function Products() {
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
              <Box textAlign="center" p={6} mt="1" fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1}>
                {about.title}
              </Box>
            </Box>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Lorem count={2} />
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant="ghost">Secondary Action</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}
