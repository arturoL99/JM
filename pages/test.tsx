import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Main from "../src/components/Main";
import arrow from "../src/images/up-arrow-white.webp";
import { goUp, goDown } from "../src/utils/SlidesUtils";
import Contacts from "../src/components/Contacts";
import Projects from "../src/components/Projects";
import ContactModal from "../src/components/ContactModal";

export default function Test() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="modal_container">
      <button onClick={() => setOpen(!open)}>open</button>
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
    </div>
  );
}
