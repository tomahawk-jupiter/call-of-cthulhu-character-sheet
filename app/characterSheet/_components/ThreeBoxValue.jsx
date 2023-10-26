import styles from "./threeBoxValue.module.css";

const ThreeBoxValue = ({ value }) => {
  return (
    <div className={styles.threeBoxContainer}>
      <div className={styles.fullValue}>{value}</div>
      <div className={styles.threeBoxRightSide}>
        <div className={styles.halfValue}>{value / 2}</div>
        <div className={styles.fifthValue}>{value / 5}</div>
      </div>
    </div>
  );
};

export default ThreeBoxValue;
