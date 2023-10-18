import Image from "next/image";
import profilePic from "../../../public/images/male-avatar.jpg";
import styles from "./info.module.css";

const Info = () => {
  return (
    <div className={styles.infoBox}>
      <Image src={profilePic} alt="Character avatar" width={100} />
      <div>
        <div>Name</div>
        <div>Player</div>
        <div>Occupation</div>
        <span>Age</span>
        <span>Sex</span>
        <div>Residence</div>
        <div>Birthplace</div>
      </div>
    </div>
  );
};

export default Info;
