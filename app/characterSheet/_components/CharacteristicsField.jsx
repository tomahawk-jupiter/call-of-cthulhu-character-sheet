import styles from "./characteristics.module.css";

const CharactisticsField = ({ stat, value }) => {
  return (
    <div className={styles.characteristicFieldBox}>
      <div>{stat}</div>
      <div>{value}</div>
    </div>
  );
};

export default CharactisticsField;
