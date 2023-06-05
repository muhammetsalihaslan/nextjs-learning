import React from "react";
import styles from "./button.nodule.css";
import Link from "next/link";

const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <div className={styles.container}>Button</div>
    </Link>
  );
};

export default Button;
