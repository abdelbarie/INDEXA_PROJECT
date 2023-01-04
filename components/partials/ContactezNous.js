import React  , {useState} from "react";
import { send } from 'emailjs-com';



const ContactezNous = (props) => {
  const [toSend , setToSend] = useState(
    {
      fullName : '' , 
      phoneNumber : '' , 
      message : ''
    }
  ) ; 

const onSubmit = (e) => {
  e.preventDefault();
  send(
    'service_lizwjjg',
    'template_4jlk32s',
    toSend,
    'zH0VSxnqTz0tymbqL'
  )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    })
    .catch((err) => {
      console.log('FAILED...', err);
    });

    alert("Email send succesfully")
}
const onChange = (e) =>{
   setToSend({...toSend , [e.target.name] : e.target.value }) ; 
}
 
  return (
    <div className="lg:w-8/12 md:w-10/12 mx-auto pt-4 pb-20 relative">
      <div className="font-bold text-center py-2 text-2xl mb-5">
        {props.content.contact.contacts.title}
      </div>
      <div className={`${props.locale === 'fr' ? 'md:flex-row text-left' : 'md:flex-row-reverse text-right'} md:flex grid gap-4 rounded-2xl shadow-md bg-custom-dark-blue dark:bg-custom-dark-green relative md:p-10 p-7`}>
        <div className="w-full h-fit">
          <div className="text-white font-extrabold md:text-3xl text-2xl">{props.content.contact.contacts.bigdesc}</div>
          {/* <div className="text-white font-light text-xs mt-2 w-11/12">{props.content.contact.contacts.smalldesc}</div> */}
        </div>
        <div className="relative h-fit my-auto w-full md:px-5">
          <form onSubmit={onSubmit} >
            <input  onChange={onChange} name="fullName" placeholder={props.content.contact.form.fullName} className={`${props.locale === 'fr' ? 'text-left' : 'text-right'} font-light   bg-custom-light-blue  text-custom-dark-blue p-2 w-full rounded-md mb-2 outline-none text-sm`}></input>
            <input onChange={onChange} name="phoneNumber" placeholder={props.content.contact.form.PhoneNumber} type="phoneNumber" className={`${props.locale === 'fr' ? 'text-left' : 'text-right'} font-light text-custom-dark-blue   bg-custom-light-blue p-2 w-full rounded-md mb-2 outline-none text-sm`}></input>
            <input onChange={onChange} name="email" placeholder={props.content.contact.form.Email} type="email" className={`${props.locale === 'fr' ? 'text-left' : 'text-right'} font-light text-custom-dark-blue   bg-custom-light-blue p-2 w-full rounded-md mb-2 outline-none text-sm`}></input>
            <textarea onChange={onChange} name = "message" placeholder={props.content.contact.form.maladie} className={`${props.locale === 'fr' ? 'text-left' : 'text-right'}  bg-custom-light-blue  text-custom-dark-blue p-2 w-full rounded-md mb-2 outline-none text-sm h-20`} ></textarea>
            <button className={`${props.locale === 'fr' ? 'text-left' : 'text-right'}font-bold text-white px-3 py-2 text-md hover:bg-custom-dark-bg bg-custom-green rounded-md   float-right`} type="submit">{props.content.contact.form.submit}</button>
          </form>
        </div>

        {/* svgs */ }
        <img alt="icons" src="/imgs/greenCircle.svg" className="absolute top-32 -right-6 w-12"></img>
        <img alt="icons" src="/imgs/smallCircles.svg" className="absolute -bottom-6 -left-6 w-16"></img>
      </div>
    </div>
  );
};

export default ContactezNous;
