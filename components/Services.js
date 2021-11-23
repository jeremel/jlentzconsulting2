import styles from "./styles/Services.module.css";
import Image from "next/image";
import CoachingImg from "../public/Croods-KeepinginTouch.png";
import FinanceImg from "../public/TheLittleThings-Working.png";
import OpsImg from "../public/Dayflow-Teamwork.png";
import ProjectMgmtImg from "../public/ProjectManagementBlush.png";

export default function services() {
  return (
    <div className={styles.container} id="services">
      <div className={styles.service} id="coaching">
        <div className={styles.serviceText}>
          <h1>Coaching</h1>
          <p>
            We work one on one with small business owners so that they can feel
            more confident about the decisions that they are making for their
            business. With over a decade of experience working directly with
            owners of small businesses, we are acutely aware of their
            challenges, concerns, paint points, and needs.
          </p>
        </div>
        <Image
          src={CoachingImg}
          alt="Small Business Coaching"
          height={CoachingImg.height}
          widht={CoachingImg.width}
          objectFit="contain"
          placeholder="blur"
        />
      </div>
      <hr />

      <div className={styles.service} id="finances">
        <Image
          src={FinanceImg}
          alt="Financial Advisory Services"
          height={FinanceImg.height}
          width={FinanceImg.width}
          objectFit="contain"
          placeholder="blur"
        />
        <div>
          <h1>Financial Advisory</h1>
          <p>
            If you are struggling to create a financial plan or budget that
            actually works or are planning for a large capital expenditure in
            the near future, we will provide strategic advisory services to help
            you analyze your situation and make the most informed financial
            decision possible. We have managed the finances of multiple
            multi-million dollar small businesses for more than ten years, and
            will use our experience and expertise to create a plan that works
            for you.
          </p>
        </div>
      </div>
      <hr />

      <div className={styles.service} id="operations">
        <div className={styles.serviceText}>
          <h1>Operations Advisory</h1>
          <p>
            Running a business is hard work, and even the smallest changes often
            will have a profound ripple effect across your entire organization.
            We will work with you to create a plan to implement that will take
            the guesswork out of running the operations of your business. With
            experience in accounting, HR, operations, and executive management,
            we are uniquely positioned to help you achieve your goals.
          </p>
        </div>
        <Image
          src={OpsImg}
          alt="Operations Advisory Services"
          height={OpsImg.height}
          width={OpsImg.width}
          objectFit="contain"
          placeholder="blur"
        />
      </div>
      <hr />

      <div className={styles.service} id="projectmanagement">
        <Image
          src={ProjectMgmtImg}
          alt="Project Management Services"
          height={ProjectMgmtImg.height}
          width={ProjectMgmtImg.width}
          objectFit="contain"
          placeholder="blur"
        />
        <div>
          <h1>Project Management</h1>
          <p>
            Whether you already have a project in the pipeline that needs
            somebody dedicated to making sure it is accomplished on time and on
            budget or you are planning on some change in your busineess but do
            not have the time to manage it yourself, we are available to manage
            your projects in a way that will keep all stakeholders involved and
            up to date through each step of the process. We believe that our use
            of clear communication, our attention to detail, and our genuine
            desire to see our clients succeed make us the best choice to manage
            your project.
          </p>
        </div>
      </div>
    </div>
  );
}
