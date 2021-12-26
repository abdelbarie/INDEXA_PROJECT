import React ,{useState} from 'react';

const Historique = (props) => {
    const [hisMore , setMoreHis] = useState(true) ; 
    const showMore = ()=>{
        setMoreHis(!hisMore) ; 
    }
    return (
        <div className="rounded-2xl shadow-md bg-custom-light-blue relative w-8/12 mx-auto pt-4 pb-5 px-6 my-10">
        <div className="font-semibold text-2xl">
          Historique <hr />
        </div>
        <div className="flex justify-between mt-4">
         <div className="w-1/4 text-lg">Date</div>
         <div className="w-1/4 text-lg">Date</div>
         <div className="w-1/4 text-lg">Date</div>
         <div className="w-1/4 text-lg">Date</div>
        </div>
         {props.hist.map((his , key)=>(
         <div className={`flex justify-between mt-4 ${(hisMore && key > 4 )?'hidden' : 'block'}`} key={key}>
         <div className="w-1/4 text-md font-light">{his.date}</div>
         <div className="w-1/4 text-md font-light">{his.product}</div>
         <div className="w-1/4 text-md font-light">{his.peices}</div>
         <div className="w-1/4 text-md font-light">{his.price} DA</div>
        </div>))}
         <div className="w-fit mx-auto mt-4 text-xl"><button onClick={showMore}>{hisMore ? 'Plus...' : 'Moins...'}</button></div>
      </div>
    );
};

export default Historique;