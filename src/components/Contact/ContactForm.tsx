import { Dispatch, FC, SetStateAction } from "react";

type Props = {
  onSubmit: (e: any) => void;
};

const ContactForm: FC<Props> = ({ onSubmit }) => {
  return (
    <form onSubmit={() => console.log("onSubmit")}>
    <div className="form_column">
      <div className="field">
        <input type="text" name="name" placeholder=" " required />
        <label htmlFor="name">First Name</label>
      </div>
      <div className="field">
        <input type="text" name="lastName" placeholder=" " required />
        <label htmlFor="name">Last Name</label>
      </div>
      <div className="field">
        <input type="email" name="mail" placeholder=" " required />
        <label htmlFor="mail">Email</label>
      </div>
    </div>
    <div className="form_column">
      <div className="field">
        <textarea name="message" />
      </div>
      <button className="form_btn">
        <span>Send Message</span>
      </button>
    </div>
  </form>
  );
};

export default ContactForm;
