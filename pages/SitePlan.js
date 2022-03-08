import React from 'react';
import Link from 'next/link';

const PlanSite = () => {
    return (
        < div className=" md:px-16 lg:px-36 pb-20 pt-10">
            <div className="text-lg font-semibold"> 
                  <Link href="/"><a>ACCEUIL</a></Link>
            </div>
            <div className="text-lg font-semibold">
                  <Link href="/products"><a>PRODUIT</a></Link>
                  <div className='pl-10 font-light font-sm'>
                  MATERIEL INFORMATIQUE
                  </div>
                  <div className='pl-10 font-light font-sm'>
                  HORLOGERIE                  </div>
                  <div className='pl-10 font-light font-sm'>
                  MATÉRIELS PÉDAGOGIQUE                   </div>
                  <div className='pl-10 font-light font-sm'>
                  JEUX EDUCATIFS 
                  </div>
                  <div className='pl-10 font-light font-sm'>
                  CALCULE                  </div>
                  <div className='pl-10 font-light'>
                  LOGICILE                  </div>
                  <div className='pl-10 font-light font-sm'>
                  MACHINE À ÉCRIRE
                  </div>
                  <div className='pl-10 font-light font-sm'>
                  DESSINS                  </div>
                  <div className='pl-10 font-light font-sm' >
                  TABLETTE ET ACCESSOIRES              </div>
                  <div className='pl-10 font-light font-sm'>
                  DIVERS                  </div>
            </div>
            <div className="text-lg font-semibold">
                  <Link href="/about"><a> A PROPOS</a></Link>
            </div>
            <div className="text-lg font-semibold"> 
                  <Link href="/contact"><a> CONTACT </a></Link>
            </div>
        </div>
    );
};

export default PlanSite; 