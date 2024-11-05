// app/components/Popup.js
import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./popUp.module.css";
import CardButton from "../CardButton";

const Popup = ({
  isOpen,
  onClose,
  children,
  product,
  productInCard,
  handleAddToCart,
  handleRemoveFromCart,
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.popup}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>

        <div className={styles.content}>
          <div className={styles.productImage}>
            <Image
              src={product.images[0]}
              alt="product"
              layout="fill"
              objectFit="contain"
              unoptimized
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div>
            <Link href="#">
              <h3 className={styles.title}>{product.title}</h3>
            </Link>
            <Link href="#">
              <p className={styles.brand}>{product.brand || "Fabrilife"}</p>
            </Link>

            <p>{product.description}</p>

            <div
              className={`${styles.addToCart} ${
                productInCard ? styles.productInCard : ""
              }`}
            >
              <CardButton
                isProductInCart={!!productInCard}
                type={productInCard ? "delete" : "cart"}
                onClick={handleAddToCart}
                handleRemoveFromCart={handleRemoveFromCart}
              >
                {productInCard
                  ? `${productInCard.quantity} Added in Cart`
                  : "Add To Cart"}
              </CardButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
