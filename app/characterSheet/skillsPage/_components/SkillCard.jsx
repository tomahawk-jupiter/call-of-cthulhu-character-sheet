import styles from "./skillCard.module.css";

const SkillCard = ({ skill }) => {
  return (
    <div className={styles.skillCard}>
      <div className={styles.cardLeft}>
        <div className={styles.skillBaseValue}>{skill.baseValue}</div>
        <div>{skill.skill}</div>
      </div>
      <div className={styles.circle}></div>
    </div>
  );
};

export default SkillCard;
