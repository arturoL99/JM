import { Dispatch, FC, SetStateAction, useState } from "react";

type Props = {
  open: boolean;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  lastName: string;
  setLastName: Dispatch<SetStateAction<string>>;
  mail: string;
  setMail: Dispatch<SetStateAction<string>>;
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
};
const ContactModal: FC<Props> = ({
  open,
  name,
  setName,
  lastName,
  setLastName,
  mail,
  setMail,
  message,
  setMessage,
}) => {
  return (
    <section className={open ? "modal open" : "modal"}>
      <h2>Send Message plz, me so lonely</h2>
      <form className="" onSubmit={() => console.log("sendMail")}>
        <input
          type="text"
          placeholder="First Name"
          className=""
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          className=""
          required
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className=""
          required
          onChange={(e) => setMail(e.target.value)}
        />
        <textarea
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="">Send Message</button>
      </form>
    </section>
  );
};

export default ContactModal;
