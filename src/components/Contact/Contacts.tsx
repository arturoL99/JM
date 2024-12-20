import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import ContactModal from "./ContactModal";
import Image from "next/image";
import instagram from "../../images/icons8-instagram.svg";
import mail from "../../images/icons8-gmail.svg";
import Link from "next/link";
import { animateModal, moveContactsContainer } from "../../utils/ModalUtil";
import logo from "../../images/P360_Logo.png";
import { handleLogoClick } from "../../utils/MainUtils";

type Props = {
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
};

const Contacts: FC<Props> = ({ active, setActive }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    moveContactsContainer(active);
  }, [active]);

  useEffect(() => {
    animateModal(open);
  }, [open]);

  return (
    <section id="contacts" className={`contacts_container spacer`}>
      <div className="home_icon_container" onClick={() => handleLogoClick(setActive)}>
        <Image src={logo} className="home_icon" alt="icon" width={200} height={35} />
      </div>
      <div className="contacts">
        <h1 className="title">
          Discover the power of{" "}
          <span className="animate-charcter" onClick={() => setOpen(!open)}>
            PHENOTYPE
          </span>
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
      <ContactModal email="redaction.phenotype360@gmail.com" setOpen={setOpen} />
    </section>
  );
};

export default Contacts;
