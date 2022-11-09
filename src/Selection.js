import './App.css';
import {groups} from './db';
import Knapp from './Knapp';
import KnappProg from './KnappProg';
import Searchbar from './searchbar';
import {Link, useParams} from "react-router-dom";
import Flagga from './Flagga';

//Sidan med alla föreningar av en typ, landar här från de fyra stora knapparna på startsidan
//Program, Föreningar, Festerier, Phadderier
function Selection() {

    const all = groups;

    let {type} = useParams();

    const L = Flagga;
    var nameLang = "nameSW";
    
    if(Flagga.lang === true){
        nameLang = "nameSW";
    } else {
        nameLang = "nameEN";
    }
    console.log(nameLang);
    console.log(type);
    const sorted_groups = groups.sort((a,b) => a.nameSW.localeCompare(b.nameSW));

    //console.log(group.type);
    var filtered = sorted_groups.filter((group) => (group.type === type)); //filtrering
    console.log(filtered);
    return (
        <div className="Home">
            {type}
            {filtered.map((group) => (<div className="dropdown-row"> {<KnappProg titel={group.nameSW} link={group.code} color={group.color}/>}</div>))}
        </div>
        
    );
  }

  export default Selection;