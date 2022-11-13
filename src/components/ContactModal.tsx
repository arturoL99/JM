import { Dispatch, FC, SetStateAction } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import ContactForm from "./ContactForm";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};
const ContactModal: FC<Props> = ({ open, setOpen }) => {
  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        `${process.env.NEXT_PUBLIC_MAIL_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_MAIL_TEMPLATE_ID}`,
        e.target,
        `${process.env.NEXT_PUBLIC_MAIL_PUBLIC_KEY}`
      )
      .then(
        () => {
          toast.success("Your message was sent!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        () => {
          toast.error("Something went wrong, try again", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section className={open ? "modal open" : "modal"}>
      <div className="modal_title">
        <h2>
          elias@mail.com
          <br />
          Or leave a message here:
        </h2>
      </div>

      <div className="form_container">
        <ContactForm onSubmit={sendEmail} />
      </div>
      <div className="modal_info">
        <small>
          to exit click <button onClick={() => setOpen(false)}>HERE</button>
        </small>
      </div>
    </section>
  );
};

export default ContactModal;
