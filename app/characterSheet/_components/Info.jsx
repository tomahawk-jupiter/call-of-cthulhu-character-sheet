import Image from "next/image";
import profilePic from "../../../public/images/male-avatar.jpg";
import styles from "./info.module.css";
import { characterData } from "../../../gameData/characterData/character";
import InfoField from "./InfoField";

const Info = () => {
  return (
    <div className={styles.infoBox}>
      <Image src={profilePic} alt="Character avatar" width={100} />
      <div>
        <InfoField field="Name" value={characterData.info.name} />
        <InfoField field="Player" value={characterData.info.player} />
        <InfoField field="Occupation" value={characterData.info.occupation} />
        <InfoField field="Age" value={characterData.info.age} />
        <InfoField field="Sex" value={characterData.info.sex} />
        <InfoField field="Residence" value={characterData.info.residence} />
        <InfoField field="Birthplace" value={characterData.info.birthplace} />
      </div>
    </div>
  );
};

export default Info;
