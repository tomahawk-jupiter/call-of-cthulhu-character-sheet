"use client";
import Link from "next/link";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";

export default function CharacterSheetLayout({ children }) {
  const pathname = usePathname();

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
              <Link
                className={
                  pathname == "/characterSheet" ? styles.activeLink : ""
                }
                href="/characterSheet"
              >
                Front
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathname == "/characterSheet/skillsPage"
                    ? styles.activeLink
                    : ""
                }
                href="/characterSheet/skillsPage"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathname == "/characterSheet/stuffPage"
                    ? styles.activeLink
                    : ""
                }
                href="/characterSheet/stuffPage"
              >
                Stuff
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathname == "/characterSheet/storyPage"
                    ? styles.activeLink
                    : ""
                }
                href="/characterSheet/storyPage"
              >
                Story
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>{children}</div>
    </div>
  );
}
