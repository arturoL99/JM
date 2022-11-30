import { FC } from "react";

type Props = {
  onSubmit: (e: any) => void;
};

const ContactForm: FC<Props> = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
    <div className="form_column">
      <div className="field">
        <input type="text" name="name" placeholder="First Name" required />
      </div>
      <div className="field">
        <input type="text" name="lastName" placeholder="Last Name" required />
      </div>
      <div className="field">
        <input type="email" name="mail" placeholder="Email" required />
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
