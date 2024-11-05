"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPlus, FaMinus } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import CardButton from "../components/CardButton";
import { addToCart, removeFromCart } from "../redux/slices/cartSlice";
import Icon from "../components/common/icons";

import styles from "./cartPage.module.css";

const CartPage = () => {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.cart);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product.id));
  };

  return (
    <div className={styles.cartPage}>
      <h1 className={styles.title}>Your Cart</h1>

      {cart.map((item) => (
        <div key={item.id} className={styles.cartItem}>
          <Link href={`/product/${item.id}`} className={styles.productImage}>
            <Image
              src={item.images[0]}
              alt="product"
              layout="fill"
              objectFit="contain"
              unoptimized
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>
          <div className={styles.productDetails}>
            <Link href={`/product/${item.id}`}>
              <h2 className={styles.productTitle}>{item.title}</h2>
            </Link>
            <div className={styles.quantityControls}>
              <button
                onClick={() => handleRemoveFromCart(item)}
                className={styles.iconButton}
              >
                {item.quantity > 1 ? <FaMinus /> : <Icon type="delete" />}
              </button>
              <span className={styles.quantity}>{item.quantity}</span>
              <button
                onClick={() => handleAddToCart(item)}
                className={styles.iconButton}
              >
                <FaPlus />
              </button>
            </div>
          </div>
        </div>
      ))}

      <CardButton className={styles.checkoutButton}>
        Proceed to Checkout
      </CardButton>
    </div>
  );
};

export default CartPage;
