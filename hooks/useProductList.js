import { useState, useEffect } from "react";
import { firestore } from "../firebase/firebase";
import { query, orderBy, getDocs, collection } from "firebase/firestore";

export const useProductList = () => {
  const [productDocs, setProductDocs] = useState([]);

  useEffect(() => {
    (async () => {
      setProductDocs(await getProductData());
    })();
  }, []);

  const getProductData = async () => {
    const productQuery = query(collection(firestore, "products"), orderBy("createdAt", "desc"));
    const productDocs = await getDocs(productQuery);
    return productDocs.docs;
  };

  return productDocs;
};
