import Image from "next/image";
import Link from "next/link";
import styles from "./styles/Nav.module.css";
import logo from "../public/JLentzConsulting-Vertical1.png";

export default function Nav() {
  return (
    <nav className={styles.container}>
      <Link href="/" passHref>
        <Image className={styles.img} src={logo} alt="JLentz Consulting" />
      </Link>
      <ul className={styles.ul}>
        <li>
          <Link href="/#services">
            <a>Services</a>
          </Link>
        </li>
        <li>
          <Link href="/#about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/#contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
