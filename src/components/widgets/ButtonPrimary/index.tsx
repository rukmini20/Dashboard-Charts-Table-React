import React from "react";
import Button from "@material-ui/core/Button";
import styles from "./index.module.scss";
const ButtonPrimary = ({ className, title, onClick }: any) => {
  return (
    <div className={`${styles.background} ${className || className}`}>
      <Button type="button" onClick={onClick}>
        {title}
      </Button>
    </div>
  );
};

export default ButtonPrimary;
