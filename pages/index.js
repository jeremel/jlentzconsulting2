import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Services from "../components/Services";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>JLentz Consulting</title>
        <meta name="description" content="JLentz Consulting" />
        <link rel="icon" href="/JL_Logo.png" />
      </Head>

      <Nav />
      <Header />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
