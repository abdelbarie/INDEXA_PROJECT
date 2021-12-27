import React ,{useState} from 'react';

const Historique = (props) => {
    const [hisMore , setMoreHis] = useState(true) ; 
    const showMore = ()=>{
        setMoreHis(!hisMore) ; 
    }
    return (
        <div className="rounded-2xl shadow-md bg-custom-light-blue relative md:w-8/12 mx-auto pt-4 pb-5 md:px-6 px-4 my-10">
        <div className="font-semibold text-2xl border-b-2 border-custom-dark-blue">
          Historique
        </div>
        <div className="flex gap-1 justify-between mt-4">
         <div className="w-3/12 text-md md:text-lg">Date</div>
         <div className="w-4/12 text-md md:text-lg">Produit</div>
         <div className="w-2/12 text-md md:text-lg">Unités</div>
         <div className="w-3/12 text-md md:text-lg">Prix</div>
        </div>
         {props.hist.map((his , key)=>(
            <>
         <div className={`flex gap-2 justify-between mt-4 ${(hisMore && key > 4 )?'hidden' : 'block'}`} key={key}>
         <div className="w-3/12 md:text-md text-sm font-light">{his.date}</div>
         <div className="w-4/12 md:text-md text-sm font-light">{his.product}</div>
         <div className="w-2/12 md:text-md text-sm font-light">{his.peices}</div>
         <div className="w-3/12 md:text-md text-sm font-light">{his.price} DA</div>
        </div>
        
        <hr/>
        </>))}
         <div className="w-fit mx-auto mt-4 text-xl"><button onClick={showMore}>{hisMore ? 'Plus...' : 'Moins...'}</button></div>
      </div>
    );
};

export default Historique;