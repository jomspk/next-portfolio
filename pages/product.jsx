import { Text, Box } from "@chakra-ui/react";

import { useProductList } from "../hooks/useProductList";
import ProductList from "../components/ProductList";

export default function Product() {
  const productDocs = useProductList();

  return (
    <Box margin="50px 50px">
      <Text fontSize="5xl" textAlign="left">
        Products
      </Text>
      <Text>大学１年から現在までの個人開発したプロダクトを記載しています</Text>
      <br />
      <ProductList productDocs={productDocs} />
    </Box>
  );
}
