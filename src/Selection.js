import './App.css';
import {groups} from './db';
import Knapp from './Knapp';
import KnappProg from './KnappProg';
import Searchbar from './searchbar';
import TillbakaKnapp from './TillbakaKnapp';
import {Link, useParams} from "react-router-dom";
import Flagga from './Flagga';
import {lang} from './Flagga';

//Sidan med alla föreningar av en typ, landar här från de fyra stora knapparna på startsidan
//Program, Föreningar, Festerier, Phadderier
function Selection() {

    let {type} = useParams(); //hämtning av typ från url
    
    //console.log(type);
    const sorted_groups = groups.sort((a,b) => eval("a.name"+lang).localeCompare(eval("b.name"+lang))); //hela databasen sorterad alfabetiskt

    //console.log(group.type);
    var filtered = sorted_groups.filter((group) => (group.type === type)); //filtrering efter typ
    //console.log(filtered);
    return (
        <div className="home">
            <div className ="header">
                <TillbakaKnapp/> 
                <h1><Link to={"/"}>Campuskollen</Link></h1>
            </div>
            {/*type*/}
            {filtered.map((group) => (<div className="dropdown-row"> {<KnappProg titel={eval("group.name"+lang)} link={group.code} color={group.color} color2={group.color2}/>}</div>))}
        </div>
        
    );
  }

  export default Selection;