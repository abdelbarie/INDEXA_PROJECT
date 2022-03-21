import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const PlanSite = () => {
      const {locale , locales , isPath} = useRouter() ; 
      const plan =locale === 'fr' ? [
            "ACCEUIL" , 
            "PRODUIT" , 
            "MATERIEL INFORMATIQUE" , 
            "HORLOGERIE" , 
            "MATÉRIELS PÉDAGOGIQUE" , 
            "JEUX EDUCATIFS", 
            "CALCULE" , 
            "LOGICILE" , 
            "MACHINE À ÉCRIRE" , 
            "DESSINS" , 
            "TABLETTE ET ACCESSOIRES " , 
            "DIVERS" , 
            "A PROPOS" , 
            "CONTACT"
      ] : [
            "الرئيسية" , 
            "المنتجات" , 
            "اعلام الي" , 
            "ساعات" , 
            "المواد التعليمية" , 
            "الألعاب التعليمية", 
            "حساب" , 
            "البرمجيات" , 
            " أدوات الكتابة" , 
            "الرسومات" , 
            '!! الملحقات' , 
            "متنوع" , 
            "معلومات عنا" , 
            "تواصل معنا"
      ]  ; 
    return (
        < div className=" md:px-16 lg:px-36 pb-20 pt-10 text-right">
            <div className="text-lg font-semibold"> 
                  <Link href="/"><a>{plan[0]}</a></Link>
            </div>
            <div className="text-lg font-semibold">
                  <Link href="/products"><a>{plan[1]}</a></Link>
                  <div className='px-10 font-light font-sm'>
                  {plan[2]}
                  </div>
                  <div className='px-10 font-light font-sm'>
                  {plan[3]}                  </div>
                  <div className='px-10 font-light font-sm'>
                  {plan[4]}                   </div>
                  <div className='px-10 font-light font-sm'>
                  {plan[5]}
                  </div>
                  <div className='px-10 font-light font-sm'>
                  {plan[6]}                  </div>
                  <div className='px-10 font-light'>
                  {plan[7]}                  </div>
                  <div className='px-10 font-light font-sm'>
                  {plan[8]}
                  </div>
                  <div className='px-10 font-light font-sm'>
                  {plan[9]}                  </div>
                  <div className='px-10 font-light font-sm' >
                  {plan[10]}              </div>
                  <div className='px-10 font-light font-sm'>
                  {plan[11]}                  </div>
            </div>
            <div className="text-lg font-semibold">
                  <Link href="/about"><a> {plan[12]}</a></Link>
            </div>
            <div className="text-lg font-semibold"> 
                  <Link href="/contact"><a>{ plan[13] } </a></Link>
            </div>
        </div>
    );
};

export default PlanSite; 