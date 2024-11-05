"use client";
import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";

import { fetchProducts } from "../redux/slices/productSlice";

import ProductItem from "../components/ProductItem";

import styles from "./ProductList.module.css";

const ProductList = () => {
  const dispatch = useDispatch();

  const { data: { payload: allProducts = [] } = {}, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => dispatch(fetchProducts()),
  });

  // useEffect(() => {
  //   if (allProducts.length > 0) {
  //     dispatch(fetchProducts());
  //   }
  // }, [allProducts, dispatch]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={styles.wrapper}>
      {allProducts?.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
