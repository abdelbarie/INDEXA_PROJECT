import react from "react";
import ContactezNous from "../components/partials/ContactezNous";
import NosInfo from "../components/partials/NosInfo";
const Contact = () => {
  return (
    <div className='px-36 relative'>
      <NosInfo></NosInfo>
      <ContactezNous></ContactezNous>
      <img src="/imgs/greenMail.svg" className="absolute bottom-52 -left-6 w-64"></img>
    </div>
  );
};

export default Contact;
