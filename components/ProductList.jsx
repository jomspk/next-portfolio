import { Grid, GridItem, Text, SimpleGrid } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ProductGrid from "./Molecules/ProductGrid";
import { useProductList } from "../hooks/useProductList";

export default function ProductList() {
  const productDocs = useProductList();

  const [productList, setProductList] = useState(null);

  async function getProductList() {
    console.log("Product Doc", productDocs);
    const productList = await Promise.all(
      productDocs.map(async (productDoc) => {
        const product = productDoc.data();
        product.id = productDoc.id;

        return product;
      })
    );
    console.log("start set product:", productList);
    setProductList(productList);
  }

  useEffect(() => {
    if (productDocs == null) return;

    (async () => {
      await getProductList();
    })();
  }, [productDocs]);

  if (productList == null) {
    console.log("stop on herer");
    return <Text>miss</Text>;
  }

  return (
    // <SimpleGrid bgColor="#F9F9FA" minChildWidth="240px" spacing="16px" padding="60px 60px">
    //   {productList.map((product) => {
    //     console.log("product", product);
    //     return <ProductGrid product={product} />;
    //   })}
    // </SimpleGrid>
    <Grid h="200" templateColumns="repeat(4, 1fr)" gap={4}>
      {productList.map((product) => {
        console.log("product", product);
        return <ProductGrid key={product} product={product} />;
      })}
    </Grid>
  );
}
