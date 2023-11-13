import DecoratedTitle from "./DecoratedTitle";
import styles from "./status.module.css";

const Status = ({ status }) => {
  return (
    <div className={styles.statusContainer}>
      <DecoratedTitle title="status" />

      <div>
        <div>HP</div>
        <div className={styles.valueBox}>
          <span>{status.hitpoints.current}</span>
          <span>/</span>
          <span>{status.hitpoints.max}</span>
        </div>
      </div>

      <div>
        <div>Sanity</div>
        <div className={styles.valueBox}>
          <span>{status.sanity.current}</span>
          <span>/</span>
          <span>{status.sanity.max}</span>
        </div>
      </div>

      <div>
        <div>MP</div>
        <div className={styles.valueBox}>
          <span>{status.magicPoints.current}</span>
          <span>/</span>
          <span>{status.magicPoints.max}</span>
        </div>
      </div>

      <div>Luck</div>
      <div className={styles.valueBox}>{status.luck}</div>
    </div>
  );
};

export default Status;
