import DecoratedTitle from "./DecoratedTitle";
import SkillField from "./SkillsField";
import styles from "./skills.module.css";

const Skills = () => {
  return (
    <div className={styles.skillsContainer}>
      <DecoratedTitle title="skills" />

      <div className={styles.skillListScroll}>
        <SkillField skillName={"Sleight of Hand"} value={42} />
        <SkillField skillName={"Handgun"} value={85} />
        <SkillField skillName={"Investigation"} value={80} />
        <SkillField skillName={"Sleight of Hand"} value={42} />
        <SkillField skillName={"Handgun"} value={64} />

        <SkillField skillName={"Sleight of Hand"} value={42} />
        <SkillField skillName={"Handgun"} value={85} />
        <SkillField skillName={"Investigation"} value={80} />
        <SkillField skillName={"Sleight of Hand"} value={42} />
        <SkillField skillName={"Handgun"} value={64} />
      </div>
    </div>
  );
};

export default Skills;
