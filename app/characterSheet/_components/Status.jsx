import DecoratedTitle from "./DecoratedTitle";
import styles from "./status.module.css";

const Status = () => {
  return (
    <div className={styles.statusContainer}>
      <DecoratedTitle title="status" />

      <div>
        <div>HP</div>
        <div className={styles.valueBox}>
          <span>10</span>
          <span>/</span>
          <span>10</span>
        </div>
      </div>

      <div>
        <div>Sanity</div>
        <div className={styles.valueBox}>
          <span>10</span>
          <span>/</span>
          <span>10</span>
        </div>
      </div>

      <div>
        <div>MP</div>
        <div className={styles.valueBox}>
          <span>10</span>
          <span>/</span>
          <span>10</span>
        </div>
      </div>

      <div>Luck</div>
      <div className={styles.valueBox}>70</div>
    </div>
  );
};

export default Status;
