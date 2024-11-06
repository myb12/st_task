"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

import Icon from "../icons";

import styles from "./header.module.css";

const Header = () => {
  const { totalQuantity } = useSelector((state) => state.cart);
  const { wishList = [] } = useSelector((state) => state.wishList) || [];

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.brand}>
        ST Commerce
      </Link>

      <div className={styles.menuItem}>
        <Link
          href="/wishlist"
          className={`${styles.iconWrapper} ${styles.wishList}`}
        >
          <Icon type="heart" />
          <span>{wishList.length}</span>
        </Link>

        <Link href="/cart" className={styles.iconWrapper}>
          <Icon type="cart" />
          <span>{totalQuantity}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
