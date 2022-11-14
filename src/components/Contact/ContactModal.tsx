import { Dispatch, FC, SetStateAction } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import ContactForm from "./ContactForm";
import Image from "next/image";
import mailIcon from "../../images/icons8-gmail.svg";

type Props = {
  setOpen: Dispatch<SetStateAction<boolean>>;
  email: string;
};
const ContactModal: FC<Props> = ({ setOpen, email }) => {
  const sendEmail = (e: any) => {
    e.preventDefault();
    setOpen(false);
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
    <section className={"modal"}>
      <div className="modal_title">
        <a href={`mailto:${email}`} className="modal_email">
          <span>{email}</span>
          <div className="email_icon">
            
            <Image
              src={mailIcon}
              alt="mail"
              width={30}
              height={30}
              loading="lazy"
            />
          </div>
        </a>

        <h2>Or leave a message here:</h2>
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
