import styles from "./storyFieldCard.module.css";

const StoryFieldCard = ({ header, text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>{header}</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default StoryFieldCard;
