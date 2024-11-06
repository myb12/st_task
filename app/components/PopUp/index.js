import React from "react";
import Image from "next/image";
import Link from "next/link";
import { bool, func, shape, string, number, arrayOf } from "prop-types";

import CardButton from "../CardButton";
import Icon from "../common/icons";

import styles from "./popUp.module.css";

const Popup = ({
  isOpen,
  onClose,
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
          <Icon type="close" />
        </button>

        <div className={styles.content}>
          <div className={styles.productImage}>
            <Image
              src={product.images[0]}
              alt="product"
              fill
              unoptimized
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div>
            <Link href="#">
              <h3 className={styles.title}>{product.title}</h3>
            </Link>
            <Link href="#">
              <p className={styles.brand}>{product.brand}</p>
            </Link>

            <p className={styles.description}>{product.description}</p>

            <div
              className={`${styles.addToCart} ${
                productInCard ? styles.productInCard : ""
              }`}
            >
              <CardButton
                isProductInCart={!!productInCard}
                type={
                  productInCard
                    ? productInCard.quantity > 1
                      ? "minus"
                      : "delete"
                    : "cart"
                }
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

Popup.propTypes = {
  isOpen: bool.isRequired,
  onClose: func.isRequired,
  product: shape({
    images: arrayOf(string).isRequired,
    title: string.isRequired,
    brand: string,
    description: string.isRequired,
  }).isRequired,
  productInCard: shape({
    quantity: number.isRequired,
  }),
  handleAddToCart: func.isRequired,
  handleRemoveFromCart: func.isRequired,
};

Popup.defaultProps = {
  productInCard: null,
};

export default Popup;
