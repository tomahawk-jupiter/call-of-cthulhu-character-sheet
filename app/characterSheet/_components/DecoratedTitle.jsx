import styles from "./decoratedTitle.module.css";

const DecoratedTitle = ({ title }) => {
  return (
    <div className={styles.titleContainer}>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};

export default DecoratedTitle;
