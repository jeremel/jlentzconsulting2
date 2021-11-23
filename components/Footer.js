import Link from "next/link";
import styles from "./styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.company}>
        <h1>
          <Link href="/">JLentz Consulting</Link>
        </h1>
        <p>Egg Harbor City, NJ</p>
        <p>
          <Link href="mailto:jlentzconsulting@gmail.com">
            jlentzconsulting@gmail.com
          </Link>
        </p>
        <p>&copy; 2021 JLentz Consulting</p>
      </div>
      <div className={styles.sitemap}>
        <div className={styles.services}>
          <h2>
            <Link href="/#services">Services:</Link>
          </h2>
          <h3>
            <Link href="/#coaching">Coaching</Link>
          </h3>
          <h3>
            <Link href="/#finances">Finances</Link>
          </h3>
          <h3>
            <Link href="/#operations">Operations</Link>
          </h3>
          <h3>
            <Link href="/#projectmanagement">Project Management</Link>
          </h3>
        </div>
        <h2>
          <Link href="/#about">About</Link>
        </h2>
        <h2>
          <Link href="/#contact">Contact</Link>
        </h2>
      </div>
    </footer>
  );
}
