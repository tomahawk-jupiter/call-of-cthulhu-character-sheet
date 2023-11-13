import Image from "next/image";
import profilePic from "../../../public/images/male-avatar.jpg";
import styles from "./info.module.css";
import InfoField from "./InfoField";

const Info = ({ info }) => {
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
        <InfoField field="Name" value={info.name} />
        <InfoField field="Player" value={info.player} />
        <InfoField field="Occupation" value={info.occupation} />
        <div className={styles.doubleFieldRow}>
          <InfoField field="Age" value={info.age} />
          <InfoField field="Sex" value={info.sex} />
        </div>
        <InfoField field="Residence" value={info.residence} />
        <InfoField field="Birthplace" value={info.birthplace} />
      </div>
      <div className={styles.rollDiceContainer}>
        <button>ROLL</button>
        <div>Result</div>
      </div>
    </div>
  );
};

export default Info;
