import ThreeBoxValue from "./ThreeBoxValue";
import styles from "./skills.module.css";

const SkillField = ({ skillName, value }) => {
  return (
    <div className={styles.skillFieldContainer}>
      <div>{skillName}</div>
      <ThreeBoxValue value={value} />
    </div>
  );
};

export default SkillField;
