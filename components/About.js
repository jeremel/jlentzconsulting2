import styles from "./styles/About.module.css";

export default function about() {
  return (
    <div className={styles.container} id="about">
      <header>
        <h1>About JLentz Consulting</h1>
      </header>
      <section>
        <img
          src="./JeremeLentzHeadshot1.jpg"
          alt="Jereme Lentz of JLentz Consulting"
        />
        <p>
          JLentz Consulting is a small business consulting agency formed in 2021
          by Jereme Lentz. Jereme decided to start his own consulting firm so
          that he could use his experience and insights to help other small
          business owners' make more informed decisions and help them to run
          more profitable, efficient, and overall more successful organizations.
          Jereme has a bachelor of science degree in Accounting from Rowan
          University and resides in Egg Harbor City, New Jersey.
        </p>
        <hr />
        <p>
          Jereme has over a decade's worth of experience managing the finances
          of business's with multi-million dollar revenues. Jereme got his start
          managing the finances of his family's business which was a
          telecommunications engineering and installation firm that operated in
          the Mid-Atlantic region of the United States.
        </p>
        <hr />
        <p>
          Jereme then moved on to work at a services provider in the mortgage
          industry where he was responsible for all financial and accounting
          functions at this company, as well managing employee benefits and
          human resources. Jereme assisted the owners of this company with
          analyzing and ultimately purchasing another service provider in an
          adjacent industry and helped establish a new LLC to run this entity.
          Jereme was responsible for setting up and managing all of the
          financial processes of this company and also established and
          maintained the benefits and human resources for this company.
        </p>
      </section>
    </div>
  );
}
