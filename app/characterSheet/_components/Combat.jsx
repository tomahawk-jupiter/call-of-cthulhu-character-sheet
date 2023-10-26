import { weapons } from "../../../gameData/weapons";
import DecoratedTitle from "./DecoratedTitle";
import styles from "./combat.module.css";

const TableRow = ({ weapons }) => {
  return (
    <tr>
      <td className={styles.tableCell}>{weapons[1].name}</td>
      {/* TODO: remove hardcoded value, use characters relevant skill */}
      {/* <td className={styles.tableCell}>{weapons[1].skill}</td> */}
      <td className={styles.tableCell}>{75}</td>
      <td className={styles.tableCell}>{weapons[1].damage}</td>
      <td className={styles.tableCell}>{weapons[1].baseRange}</td>
      <td className={styles.tableCell}>{weapons[1].usesPerRound}</td>
      <td className={styles.tableCell}>{weapons[1].capacity}</td>
      <td className={styles.tableCell}>{weapons[1].malfunction}</td>
    </tr>
  );
};

const Combat = () => {
  return (
    <>
      <DecoratedTitle title="combat" />
      <table className={styles.table}>
        <tr className={styles.tableRow}>
          <th className={styles.headerCell}>Wpn</th>
          <th className={styles.headerCell}>Skill</th>
          <th className={styles.headerCell}>Dmg</th>
          <th className={styles.headerCell}>Rng</th>
          <th className={styles.headerCell}>Atts</th>
          <th className={styles.headerCell}>Ammo</th>
          <th className={styles.headerCell}>Malf.</th>
        </tr>
        <TableRow weapons={weapons} />
        <TableRow weapons={weapons} />
        <TableRow weapons={weapons} />
      </table>

      <div className={styles.combatStatsContainer}>
        <div className={styles.combatStatsField}>
          <span>Dmg Bonus</span>
          <span className={styles.valueBox}>10</span>
        </div>
        <div className={styles.combatStatsField}>
          <span>Build</span>
          <span className={styles.valueBox}>5</span>
        </div>
        <div className={styles.combatStatsField}>
          <span>Dodge</span>
          <span className={styles.valueBox}>20</span>
        </div>
      </div>
    </>
  );
};

export default Combat;
