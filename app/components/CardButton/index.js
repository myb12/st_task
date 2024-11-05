import React from "react";
import { bool, string, func } from "prop-types";

import Icon from "../common/icons";

import styles from "./cardButton.module.css";

const CardButton = ({
  isProductInCart,
  type,
  children,
  onClick,
  handleRemoveFromCart,
}) => {
  return (
    <button
      className={`${styles.button} ${
        isProductInCart ? styles.productInCart : ""
      }`}
      onClick={isProductInCart ? undefined : onClick}
    >
      <div className={styles.content}>
        <Icon
          type={type}
          onClick={isProductInCart ? handleRemoveFromCart : undefined}
        />
        <span>{children}</span>
        {isProductInCart && (
          <Icon type="plus" onClick={isProductInCart ? onClick : undefined} />
        )}
      </div>
    </button>
  );
};

CardButton.propTypes = {
  isProductInCart: bool,
  type: string.isRequired,
  onClick: func,
  handleRemoveFromCart: func,
};

CardButton.defaultProps = {
  isProductInCart: false,
  onClick: undefined,
  handleRemoveFromCart: undefined,
};

export default CardButton;
