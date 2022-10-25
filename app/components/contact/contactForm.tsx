import { FC, useState } from "react";
import classes from "./contact-form.module.css";

const ContactForm: FC = () => {
  const [formState, setFormState] = useState({
    email: "",
    name: "",
    message: "",
  });

  async function submitHandler(e: React.FormEvent) {
    e.preventDefault();
    const data = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formState),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const parsedData = await data.json()

    console.log(parsedData)
  }

  return (
    <section className={classes.contact}>
      <h1>How can I hug u ? </h1>
      <form className={classes.form} onSubmit={(e) => submitHandler(e)}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              onChange={(e) =>
                setFormState({ ...formState, email: e.target.value })
              }
              value={formState.email}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              onChange={(e) =>
                setFormState({ ...formState, name: e.target.value })
              }
              value={formState.name}
              required
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows={5}
            onChange={(e) =>
              setFormState({ ...formState, message: e.target.value })
            }
            required
          >{formState.message}</textarea>
        </div>
        <div className={classes.actions}>
          <button type="submit">Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
