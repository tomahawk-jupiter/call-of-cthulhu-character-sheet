import styles from "./info.module.css";

const InfoField = ({ field, value }) => {
  return (
    <div className={styles.infoField}>
      <span>{field}</span>
      <span className={styles.infoFieldValue}>{value}</span>
    </div>
  );
};

export default InfoField;
