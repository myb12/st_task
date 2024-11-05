"use client";

import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";

import { fetchProducts } from "../redux/slices/productSlice";

import Loader from "../components/common/Loader";
import ProductItem from "../components/ProductItem";

import styles from "./ProductList.module.css";

const ProductList = () => {
  const dispatch = useDispatch();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: () => dispatch(fetchProducts()),
    staleTime: 1000 * 60 * 5,
  });

  if (isError) {
    return <div className={styles.error}>Error fetching products!</div>;
  }

  if (isLoading) return <Loader />;

  const allProducts = data?.payload || [];

  return (
    <div className={styles.wrapper}>
      {allProducts?.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
