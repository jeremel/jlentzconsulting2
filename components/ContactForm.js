import styles from "./styles/ContactForm.module.css";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USERID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID;
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICEID;

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const [inputText, setInputText] = useState("Submit");
  // const [disable, setDisable] = useState(false);

  return (
    <div className={styles.container}>
      <form ref={form} onSubmit={sendEmail} className={styles.formStyle}>
        <label>Name</label>
        <input type="text" name="name" />

        <label>Company</label>
        <input type="text" name="company" />

        <label>Email</label>
        <input type="text" name="email" />

        <label>Message</label>
        <textarea name="message" />
        <input
          type="submit"
          value={inputText}
          onClick={() => {
            setInputText("Thank You!");
          }}
        />
      </form>
    </div>
  );
}
