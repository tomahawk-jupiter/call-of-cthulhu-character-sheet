import ThreeBoxValue from "./ThreeBoxValue";
import styles from "./characteristics.module.css";

const CharactisticsField = ({ stat, value }) => {
  return (
    <div className={styles.characteristicFieldBox}>
      <div className={styles.characteristicLabel}>{stat}</div>
      <ThreeBoxValue value={72} />
      {/* <div>{value}</div> */}
    </div>
  );
};

export default CharactisticsField;
