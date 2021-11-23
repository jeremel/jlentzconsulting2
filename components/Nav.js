import Image from "next/image";
import styles from "./styles/Nav.module.css";
import logo from "../public/JLentzConsulting-Vertical1.png";

export default function Nav() {
  return (
    <nav className={styles.container}>
      <a href="/">
        <Image className={styles.img} src={logo} alt="JLentz Consulting" />
      </a>
      <ul className={styles.ul}>
        <li>
          <a href="/#services">Services</a>
        </li>
        <li>
          <a href="/#about">About</a>
        </li>
        <li>
          <a href="/#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
