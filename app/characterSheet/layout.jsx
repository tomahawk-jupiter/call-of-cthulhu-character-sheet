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
        <nav className={styles.navigationOuter}>
          <ul className={styles.navigationInner}>
            <li>
              <Link className={styles.activeLink} href="/characterSheet">
                Front
              </Link>
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
        </nav>
      </div>
      <div>{children}</div>
    </div>
  );
}
