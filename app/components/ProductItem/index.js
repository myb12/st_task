import { CURRENCY_SYMBOL } from "@/app/utils/constants";
import Image from "next/image";

import styles from "./productItem.module.css";

const ProductItem = ({
  product = {
    originalPrice: "2,500",
    discount: "200",
  },
}) => {
  return (
    <div className={styles.card}>
      {/* Discount badge */}
      {product.discount && (
        <div className={styles.badge}>
          <span>
            - {CURRENCY_SYMBOL} {product.discount}
          </span>
        </div>
      )}

      {/* Product Image */}
      <div className={styles.productImage}>
        <Image
          src="/product.png"
          alt="product"
          layout="fill"
          objectFit="contain"
        />
        {/* <Image
          src={product.imageUrl}
          alt={product.name}
          layout="fill"
          objectFit="contain"
          className="rounded"
        /> */}
      </div>

      <div className={styles.cardFooter}>
        <p className={styles.brand}>{product.brand || "Fabrilife"}</p>
        <h3 className={styles.title}>
          {product.name || "Fabrilife Mens Premium Designer Edition T Shirt..."}
        </h3>
        <div className={styles.prices}>
          <span className={styles.price}>
            {CURRENCY_SYMBOL} {product.price || "2,500"}
          </span>
          {product.originalPrice && (
            <span className={styles.originalPrice}>
              {CURRENCY_SYMBOL} {product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
