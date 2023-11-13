import DecoratedTitle from "./DecoratedTitle";
import SkillField from "./SkillsField";
import styles from "./skills.module.css";

const Skills = ({ skills }) => {
  return (
    <div className={styles.skillsContainer}>
      <DecoratedTitle title="skills" />

      <div className={styles.skillListScroll}>
        {skills.map((skill, i) => {
          return (
            // TODO:
            // dodge is 1/2 DEX
            // language own in EDU
            <SkillField
              key={i}
              skillName={skill.skill}
              value={skill.baseValue}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
