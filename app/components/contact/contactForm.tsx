import { FC, useState, useEffect } from "react";
import classes from "./contact-form.module.css";
import Notification, {
  INotification,
  RequestStatus,
} from "../shared/ui/notification";

const ContactForm: FC = () => {
    const initialFormState = {
        email: "",
        name: "",
        message: "",
      }
  const [formState, setFormState] = useState({...initialFormState});

  const [requestStatus, setRequestStatus] = useState<RequestStatus | null>();

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if(requestStatus === "success" || requestStatus === "error"){
       timeout = setTimeout(() => {
            setRequestStatus(null);
        }, 1500)
    }

    return () => clearTimeout(timeout)
  }, [requestStatus])

  async function submitHandler(e: React.FormEvent) {
    e.preventDefault();
    setRequestStatus("pending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formState),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Something went wrong");
      setRequestStatus("success");

      setFormState({...initialFormState})

    } catch (err) {
      setRequestStatus("error");
    }
  }

  let notification: INotification | null = null;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "waiting to process Data",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success",
      message: "Message got sent",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error",
      message: "Some Error occoured",
    };
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
            value={formState.message}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button type="submit">Send Message</button>
        </div>
      </form>
       {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
    </section>
  );
};

export default ContactForm;
