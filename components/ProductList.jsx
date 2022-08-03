import { Grid, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ProductGrid from "./Molecules/ProductGrid";

export default function ProductList({ productDocs }) {
  const [productList, setProductList] = useState(null);

  async function getProductList() {
    const productList = await Promise.all(
      productDocs.map(async (productDoc) => {
        const product = productDoc.data();
        product.id = productDoc.id;

        return product;
      })
    );
    setProductList(productList);
  }

  useEffect(() => {
    if (productDocs == null) return;

    (async () => {
      await getProductList();
    })();
  }, [productDocs]);

  if (productList == null) {
    return <Text>miss</Text>;
  }

  return (
    <Grid h="200" templateColumns="repeat(4, 1fr)" gap={4}>
      {productList.map((product) => {
        return <ProductGrid key={product} product={product} />;
      })}
    </Grid>
  );
}
