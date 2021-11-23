import styles from "./styles/Header.module.css";
import Image from "next/image";
import HeaderImage from "../public/Croods-Chart.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>
        JLentz Consulting provides small business coaching, financial and
        operational advisory services, and project management services to
        businesses in South Jersey.
      </h1>
      <Image
        src={HeaderImage}
        alt="JLentz Consulting"
        height={HeaderImage.height}
        width={HeaderImage.width}
        objectFit="contain"
      />
    </header>
  );
}
