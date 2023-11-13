import { weapons } from "../../../gameData/weapons";
import DecoratedTitle from "./DecoratedTitle";
import styles from "./combat.module.css";

const TableRow = ({ weapon }) => {
  const elipsedName = `${weapon.name.slice(0, 10)}...`;
  return (
    <tr>
      <td className={styles.tableCell}>{elipsedName}</td>
      {/* TODO: remove hardcoded value, use characters relevant skill */}
      {/* <td className={styles.tableCell}>{weapons[1].skill}</td> */}
      <td className={styles.tableCell}>{75}</td>
      <td className={styles.tableCell}>{weapon.damage}</td>
      <td className={styles.tableCell}>{weapon.baseRange}</td>
      <td className={styles.tableCell}>{weapon.usesPerRound}</td>
      <td className={styles.tableCell}>{weapon.capacity}</td>
      <td className={styles.tableCell}>{weapon.malfunction}</td>
    </tr>
  );
};

const Combat = ({ combatStats, weapons }) => {
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

        {weapons.map((w, i) => {
          return <TableRow key={i} weapon={w} />;
        })}
      </table>

      <div className={styles.combatStatsContainer}>
        <div className={styles.combatStatsField}>
          <span>Dmg Bonus</span>
          <span className={styles.valueBox}>{combatStats.damageBonus}</span>
        </div>
        <div className={styles.combatStatsField}>
          <span>Build</span>
          <span className={styles.valueBox}>{combatStats.build}</span>
        </div>
        <div className={styles.combatStatsField}>
          <span>Dodge</span>
          <span className={styles.valueBox}>{combatStats.dodge}</span>
        </div>
      </div>
    </>
  );
};

export default Combat;
