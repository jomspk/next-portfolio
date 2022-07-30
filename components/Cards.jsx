import { Grid, GridItem, Box, Image, Link } from "@chakra-ui/react";

export default function Cards() {
  const about = {
    imageUrl: "/img/about.png",
    imageAlt: "About Me",
    title: "About Me",
  };
  const products = {
    imageUrl: "/img/products.png",
    imageAlt: "Products",
    title: "Products",
  };
  const community = {
    imageUrl: "/img/community.png",
    imageAlt: "community",
    title: "Community",
  };
  const comming = {
    imageUrl: "/img/comming.png",
    imageAlt: "comming",
    title: "Comming Soon",
  };
  return (
    <Grid padding="100px 110px 10px 160px" h="200" templateColumns="repeat(2, 1fr)" gap={4}>
      <GridItem colSpan={1}>
        <Box maxW="sm" borderWidth="1px" borderRadius="lg">
          <Link href="/about">
            <Image h="130px" w="120px" margin="0 auto" padding="0 10px 0 10px" src={about.imageUrl} alt={about.imageAlt} />
            <Box textAlign="center" p={6} mt="1" fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1}>
              {about.title}
            </Box>
          </Link>
        </Box>
      </GridItem>
      <GridItem colSpan={1}>
        <Box maxW="sm" borderWidth="1px" borderRadius="lg">
          <Link>
            <Image h="130px" w="100px" margin="0 auto" padding="0 10px 0 10px" src={products.imageUrl} alt={products.imageAlt} />
            <Box textAlign="center" p={6} mt="1" fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1}>
              {products.title}
            </Box>
          </Link>
        </Box>
      </GridItem>
      <GridItem colSpan={1}>
        <Box maxW="sm" borderWidth="1px" borderRadius="lg">
          <Link>
            <Image h="130px" w="120px" margin="0 auto" padding="0 10px 0 10px" src={community.imageUrl} alt={community.imageAlt} />
            <Box textAlign="center" p={6} mt="1" fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1}>
              {community.title}
            </Box>
          </Link>
        </Box>
      </GridItem>
      <GridItem colSpan={1}>
        <Box maxW="sm" borderWidth="1px" borderRadius="lg">
          <Image h="130px" w="120px" margin="0 auto" padding="0 10px 0 10px" src={comming.imageUrl} alt={comming.imageAlt} />
          <Box textAlign="center" p={6} mt="1" fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1}>
            {comming.title}
          </Box>
        </Box>
      </GridItem>
    </Grid>
  );
}
