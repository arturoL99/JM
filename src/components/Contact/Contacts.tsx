import { FC, useEffect, useState } from "react";
import ContactModal from "./ContactModal";
import Image from "next/image";
import instagram from "../../images/icons8-instagram.svg";
import mail from "../../images/icons8-gmail.svg";
import Link from "next/link";
import { animateModal } from "../../utils/ModalUtil";

type Props = {
  contactsClass: string;
};

const Contacts: FC<Props> = ({ contactsClass }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
      animateModal(open);
  }, [open]);

  return (
    <section id="contacts" className={`${contactsClass} contacts_container`}>
      <div className="contacts">
        <h1 className="title">
          Discover the power of <b>JEAN</b>
        </h1>

        <div className="icon_container">
          <Link href={"https://www.instagram.com/j.elias.m/"} target="_blank">
            <Image
              src={instagram}
              alt="instagram"
              width={30}
              height={30}
              loading="lazy"
              className="icon"
            />
          </Link>

          <Image
            src={mail}
            alt="mail"
            width={30}
            height={30}
            loading="lazy"
            className="icon"
            onClick={() => setOpen(true)}
          />
        </div>
      </div>
      <ContactModal email="elias@gmail.com" setOpen={setOpen} />
    </section>
  );
};

export default Contacts;
