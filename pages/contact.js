import react from "react";
import ContactezNous from "../components/partials/ContactezNous";
import NosInfo from "../components/partials/NosInfo";
const Contact = () => {
  return (
    <div className='lg:px-36 md:px-16 relative px-4'>
      <NosInfo></NosInfo>
      <ContactezNous></ContactezNous>
      <img src="/imgs/greenMail.svg" className="absolute top-64 -left-6 md:w-1/4  w-1/2  md:block -z-50"></img>
    </div>
  );
};

export default Contact;
