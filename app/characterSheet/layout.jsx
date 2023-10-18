import Link from "next/link";
import styles from "./navbar.module.css";

export default function CharacterSheetLayout({ children }) {
  return (
    <div>
      <div className={styles.controlsBox}>
        <div className={styles.editToggleBox}>
          <label htmlFor="editMode">Edit</label>
          <input type="checkbox" name="" id="editMode" />
        </div>
        <ul className={styles.navBox}>
          <li>
            <Link href="/characterSheet">Front</Link>
          </li>
          <li>
            <Link href="/characterSheet/skillsPage">Skills</Link>
          </li>
          <li>
            <Link href="/characterSheet/stuffPage">Stuff</Link>
          </li>
          <li>
            <Link href="/characterSheet/storyPage">Story</Link>
          </li>
        </ul>
      </div>
      <div>{children}</div>;
    </div>
  );
}
