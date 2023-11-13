import CharactisticsField from "./CharacteristicsField";
import DecoratedTitle from "./DecoratedTitle";
import styles from "./characteristics.module.css";

const Characteristics = ({ characteristics }) => {
  return (
    <>
      <DecoratedTitle title="characteristics" />
      <div className={styles.characteristicsContainer}>
        <div className={styles.characteristicColumn}>
          <CharactisticsField stat="STR" value={characteristics.str} />
          <CharactisticsField stat="CON" value={characteristics.con} />
          <CharactisticsField stat="SIZ" value={characteristics.siz} />
        </div>
        <div className={styles.characteristicColumn}>
          <CharactisticsField stat="DEX" value={characteristics.dex} />
          <CharactisticsField stat="APP" value={characteristics.app} />
          <CharactisticsField stat="EDU" value={characteristics.edu} />
        </div>
        <div className={styles.characteristicColumn}>
          <CharactisticsField stat="INT" value={characteristics.int} />
          <CharactisticsField stat="POW" value={characteristics.pow} />
          <CharactisticsField stat="MOV" value={characteristics.mov} />
        </div>
      </div>
    </>
  );
};

export default Characteristics;
