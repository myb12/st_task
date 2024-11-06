"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import Icon from "../components/common/icons";

import { removeFromWishlist } from "../redux/slices/wishListSlice";

import styles from "./wishListPage.module.css";

const WishListPage = () => {
  const dispatch = useDispatch();
  const { wishList = [] } = useSelector((state) => state.wishList) || [];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleRemoveFromWishlist = (itemId) => {
    dispatch(removeFromWishlist(itemId));
  };

  return (
    <div className={styles.wishListPage}>
      <h1 className={styles.title}>Your Wishlist</h1>

      {wishList.length === 0 ? (
        <p className={styles.emptyWishListMessage}>Your wishlist is empty.</p>
      ) : (
        wishList.map((item) => (
          <div key={item.id} className={styles.wishListItem}>
            <Link href="#" className={styles.productImage}>
              <Image
                src={item.images[0]}
                alt={item.title}
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </Link>
            <div className={styles.productDetails}>
              <Link href="#">
                <h2 className={styles.productTitle}>{item.title}</h2>
              </Link>
              <button
                onClick={() => handleRemoveFromWishlist(item.id)}
                className={styles.iconButton}
                title="Remove from Wishlist"
              >
                <Icon type="delete" />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default WishListPage;
