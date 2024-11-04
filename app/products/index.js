import ProductItem from "../components/ProductItem";

import styles from "./ProductList.module.css";

const ProductList = () => {
  return (
    <div className={styles.wrapper}>
      {[...new Array(10)].map((_, index) => (
        <ProductItem key={index} />
      ))}
    </div>
  );
};

export default ProductList;
