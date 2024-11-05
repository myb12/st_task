"use client";

import Link from "next/link";
import { useSelector } from "react-redux";

import Icon from "../icons";

import styles from "./header.module.css";

const Header = () => {
  const { totalQuantity } = useSelector((state) => state.cart);

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.brand}>
        ST Commerce
      </Link>

      <Link href="/cart" className={styles.cart}>
        <Icon type="cart" />
        <span>{totalQuantity}</span>
      </Link>
    </header>
  );
};

export default Header;
