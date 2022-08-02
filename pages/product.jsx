import { HStack, Text, Grid, GridItem, Image, Link, Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";
import GithubButton from "../components/GithubButton";
import { useProductList } from "../hooks/useProductList";
import ProductList from "../components/ProductList";

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
      <ProductList />
    </>
  );
}
