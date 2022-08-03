import { Text } from "@chakra-ui/react";

import { useProductList } from "../hooks/useProductList";
import ProductList from "../components/ProductList";

export default function Product() {
  const productDocs = useProductList();

  return (
    <>
      <Text fontSize="5xl" textAlign="left">
        Products
      </Text>
      <ProductList productDocs={productDocs} />
    </>
  );
}
