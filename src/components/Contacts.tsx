import { FC, useState } from "react";
import ContactModal from "./ContactModal";

type Props = {
  info: string;
};

const Contacts: FC<Props> = ({ info }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <section id="contacts" className={`${info} contacts_container`}>
      <h1 className="title">
        Discover the power of <b onClick={() => setOpen(!open)}>JEAN</b>
      </h1>
      <ContactModal
        open={open}
        name={name}
        setName={setName}
        lastName={lastName}
        setLastName={setLastName}
        mail={mail}
        setMail={setMail}
        message={message}
        setMessage={setMessage}
      />
    </section>
  );
};

export default Contacts;
