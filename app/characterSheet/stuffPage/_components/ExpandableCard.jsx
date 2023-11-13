"use client";
import { useState } from "react";
import styles from "./expandableCard.module.css";
import Image from "next/image";

const ExpandableCard = ({ title, content }) => {
  const [open, setIsopen] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <button
          className={styles.toggleOpenBtn}
          onClick={() => setIsopen(!open)}
        >
          {open ? (
            <Image src={"/images/minus.svg"} width={12} height={4} />
          ) : (
            <Image src={"/images/plus.svg"} width={12} height={12} />
          )}
        </button>
        <span>{title}</span>
      </div>
      {open && <div className={styles.cardContent}>{content}</div>}
    </div>
  );
};

export default ExpandableCard;
