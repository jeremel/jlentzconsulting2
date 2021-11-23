import Link from "next/link";
import styles from "./styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.company}>
        <h1>
          <Link href="/">
            <a>JLentz Consulting</a>
          </Link>
        </h1>
        <p>Egg Harbor City, NJ</p>
        <p>
          <Link href="mailto:jlentzconsulting@gmail.com">
            <a>jlentzconsulting@gmail.com</a>
          </Link>
        </p>
        <p>&copy; 2021 JLentz Consulting</p>
      </div>
      <div className={styles.sitemap}>
        <div className={styles.services}>
          <h2>
            <Link href="/#services">
              <a>Services:</a>
            </Link>
          </h2>
          <h3>
            <Link href="/#coaching">
              <a>Coaching</a>
            </Link>
          </h3>
          <h3>
            <Link href="/#finances">
              <a>Finances</a>
            </Link>
          </h3>
          <h3>
            <Link href="/#operations">
              <a>Operations</a>
            </Link>
          </h3>
          <h3>
            <Link href="/#projectmanagement">
              <a>Project Management</a>
            </Link>
          </h3>
        </div>
        <h2>
          <Link href="/#about">
            <a>About</a>
          </Link>
        </h2>
        <h2>
          <Link href="/#contact">
            <a>Contact</a>
          </Link>
        </h2>
      </div>
    </footer>
  );
}
