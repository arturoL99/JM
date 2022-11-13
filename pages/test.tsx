import ContactForm from "../src/components/ContactForm";


export default function Test() {
  return (
    <div className="modal open">
    <div className="form_container">

      <ContactForm onSubmit={() => console.log("sent")}/>
    </div>
    </div>
  );
}
