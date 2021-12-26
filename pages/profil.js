import react from 'react' ; 
import ProfilCard from '../components/partials/ProfilCard';
import Historique from '../components/partials/Historique';
import ProfilData from '../Data/ProfilData';

const Profil = () =>{
    const profil = ProfilData[0] ; 
    return(
        <div className="px-36">
            <ProfilCard profil = {profil}></ProfilCard>
            <Historique hist = {profil.history}></Historique>
        </div>
    )
}

export default Profil ; 