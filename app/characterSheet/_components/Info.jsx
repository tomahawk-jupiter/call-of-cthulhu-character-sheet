import Image from "next/image";
import profilePic from "../../../public/images/male-avatar.jpg";
import styles from "./info.module.css";
import { characterData } from "../../../gameData/characterData/character";
import InfoField from "./InfoField";

const Info = () => {
  return (
    <div className={styles.infoContainer}>
      <Image
        className={styles.avatar}
        src={profilePic}
        alt="Character avatar"
        width={128}
        height={128}
      />
      <div className={styles.infoTextContainer}>
        <InfoField field="Name" value={characterData.info.name} />
        <InfoField field="Player" value={characterData.info.player} />
        <InfoField field="Occupation" value={characterData.info.occupation} />
        <div className={styles.doubleFieldRow}>
          <InfoField field="Age" value={characterData.info.age} />
          <InfoField field="Sex" value={characterData.info.sex} />
        </div>
        <InfoField field="Residence" value={characterData.info.residence} />
        <InfoField field="Birthplace" value={characterData.info.birthplace} />
      </div>
    </div>
  );
};

export default Info;
