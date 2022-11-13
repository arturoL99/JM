import { FC } from "react";

type Props = {
  onSubmit: (e: any) => void;
};

const ContactForm: FC<Props> = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="field">
        <input type="text" name="name" required />
        <label htmlFor="name">First Name</label>
      </div>
      <div className="field">
        <input type="text" name="lastName" required />
        <label htmlFor="name">Last Name</label>
      </div>
      <div className="field">
        <input type="email" name="mail" required />
        <label htmlFor="mail">Email</label>
      </div>
      <div className="field">
        <textarea name="message" placeholder="Message" />
        {/* <label htmlFor="message">Message</label> */}
      </div>

      <button className="form_btn">
        <span>Send Message</span>
      </button>
    </form>
  );
};

export default ContactForm;
