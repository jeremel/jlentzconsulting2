import ContactForm from "./ContactForm";
import styles from "./styles/Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.container} id="contact">
      <div className={styles.contactText}>
        <h1>Reach Out Today!</h1>
        <h2>
          Fill out the form and leave us a brief message explaining what you
          need assistance with and we will get back to you as soon as possible!
        </h2>
        <h2>
          Or you can reach out directly via email at{" "}
          <a href="mailto:jlentzconsulting@gmail.com">
            jlentzconsulting@gmail.com
          </a>
        </h2>
      </div>
      <ContactForm />
    </div>
  );
}
