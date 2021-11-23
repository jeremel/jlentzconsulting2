import Image from "next/image";
import Link from "next/link";
import styles from "./styles/Nav.module.css";
import logo from "../public/JLentzConsulting-Vertical1.png";

export default function Nav() {
  return (
    <nav className={styles.container}>
      <Link href="/">
        <Image className={styles.img} src={logo} alt="JLentz Consulting" />
      </Link>
      <ul className={styles.ul}>
        <li>
          <Link href="/#services">Services</Link>
        </li>
        <li>
          <Link href="/#about">About</Link>
        </li>
        <li>
          <Link href="/#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
