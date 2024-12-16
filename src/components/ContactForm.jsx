import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdMail } from "react-icons/md";
import Button from "./Button";
import Output from "./Output";

const ContactForm = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [text, setText] = useState(null);

  function handleForm(e) {
    e.preventDefault();
    console.log(e);
    console.log(name);
    console.log(email);
    console.log(text);
  }
  return (
    <section className={styles.container}>
      <Output name={name} email={email}></Output>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage />}></Button>
          <Button text="CALL VIA" icon={<MdCall />}></Button>
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdMail />}
        ></Button>

        <form action="" onSubmit={handleForm}>
          <div className={styles.form_Control}>
            <label htmlFor="name">Name</label>
            <input
              placeholder="Enter Your Name"
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className={styles.form_Control}>
            <label htmlFor="email">Email</label>
            <input
              placeholder="Enter Your Email"
              type="text"
              email="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.form_Control}>
            <label htmlFor="text">Text</label>
            <textarea
              style={{ padding: "10px" }}
              placeholder="Write Here"
              name="text"
              id=""
              rows="6"
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>

          <div
            style={{ display: "flex", justifyContent: "end", height: "10px" }}
          >
            <Button text="SUBMIT"></Button>
          </div>
        </form>
      </div>

      <div className={styles.contact_image}>
        <img src="images/Service 24_7-pana 1.svg" alt="" />
      </div>
    </section>
  );
};

export default ContactForm;
