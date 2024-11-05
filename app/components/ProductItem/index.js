import { CURRENCY_SYMBOL } from "@/app/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";

import CardButton from "../CardButton";
import Icon from "../common/icons";
import Popup from "../PopUp";

import {
  calcOriginalPrice,
  inStock,
  isEligibleForDiscount,
  isFavourite,
  truncateTitle,
} from "@/app/utils/utils";
import { addToCart, removeFromCart } from "@/app/redux/slices/cartSlice";

import styles from "./productItem.module.css";

const ProductItem = ({ product, variant = "with-button" }) => {
  const dispatch = useDispatch();
  const { cart = [] } = useSelector((state) => state.cart) || [];

  const [productInCard, setProductInCard] = useState(null);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopUpOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopUpOpen(false);
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
  };

  useEffect(() => {
    setProductInCard(cart.find((item) => item.id === product.id));
  }, [cart, cart.length, product.id]);

  const idDiscounted = useCallback(() => {
    return isEligibleForDiscount(product.discountPercentage);
  }, [product.discountPercentage]);

  const favourite = useCallback(() => {
    return isFavourite(product.rating);
  }, [product.rating]);

  const isInStock = useCallback(() => {
    return inStock(product.availabilityStatus);
  }, [product.availabilityStatus]);

  return (
    <div>
      <Popup
        isOpen={isPopUpOpen}
        onClose={handleClosePopup}
        product={product}
        productInCard={productInCard}
        handleAddToCart={handleAddToCart}
        handleRemoveFromCart={handleRemoveFromCart}
      />
      <div className={styles.card}>
        {favourite() && (
          <div className={styles.favourite}>
            <Icon type="heart" />
          </div>
        )}
        {idDiscounted() && (
          <div className={styles.badge}>
            <span>
              - {CURRENCY_SYMBOL} {product.discountPercentage}
            </span>
          </div>
        )}

        <div
          className={`${styles.productImage}  ${
            variant === "with-button" ? styles.withButton : ""
          }`}
        >
          <Image
            src={product.images[0]}
            alt="product"
            layout="fill"
            objectFit="contain"
            unoptimized
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {
            <div className={styles.buttons}>
              {isInStock() ? (
                <>
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
                  <CardButton type="eye" onClick={handleOpenPopup}>
                    Quick View
                  </CardButton>
                </>
              ) : (
                <CardButton className={styles.outOfStockBtn}>
                  Out of Stock
                </CardButton>
              )}
            </div>
          }
        </div>
        <div className={styles.cardFooter}>
          <Link href="#">
            <p className={styles.brand}>{product.brand || "Fabrilife"}</p>
          </Link>
          <Link href="#">
            <h3 className={styles.title}>{truncateTitle(product.title)}</h3>
          </Link>
          <div className={styles.prices}>
            <span className={styles.price}>
              {CURRENCY_SYMBOL} {product.price || "2,500"}
            </span>
            {calcOriginalPrice(product.price, product.discountPercentage) && (
              <span className={styles.originalPrice}>
                {CURRENCY_SYMBOL}
                {calcOriginalPrice(product.price, product.discountPercentage)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
