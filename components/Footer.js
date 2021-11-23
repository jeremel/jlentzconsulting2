import styles from "./styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.company}>
        <h1>
          <a href="/">JLentz Consulting</a>
        </h1>
        <p>Egg Harbor City, NJ</p>
        <p>
          <a href="mailto:jlentzconsulting@gmail.com">
            jlentzconsulting@gmail.com
          </a>
        </p>
        <p>&copy; 2021 JLentz Consulting</p>
      </div>
      <div className={styles.sitemap}>
        <div className={styles.services}>
          <h2>
            <a href="/#services">Services:</a>
          </h2>
          <h3>
            <a href="/#coaching">Coaching</a>
          </h3>
          <h3>
            <a href="/#finances">Finances</a>
          </h3>
          <h3>
            <a href="/#operations">Operations</a>
          </h3>
          <h3>
            <a href="/#projectmanagement">Project Management</a>
          </h3>
        </div>
        <h2>
          <a href="/#about">About</a>
        </h2>
        <h2>
          <a href="/#contact">Contact</a>
        </h2>
      </div>
    </footer>
  );
}
