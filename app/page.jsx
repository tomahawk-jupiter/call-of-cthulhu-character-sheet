import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <Link href="/characterSheet">
        <h1>Open Character sheet</h1>
      </Link>
    </div>
  );
}
